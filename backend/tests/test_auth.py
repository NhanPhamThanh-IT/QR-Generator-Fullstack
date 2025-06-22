import pytest
from httpx import AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_auth_flow():
    async with AsyncClient(app=app, base_url="http://test", follow_redirects=True) as ac:
        # 1. Register
        res_register = await ac.post("/api/v1/auth/register", json={
            "email": "user@example.com",
            "password": "secure123"
        })
        assert res_register.status_code == 200
        token = res_register.json()["access_token"]
        assert token

        # 2. Login
        res_login = await ac.post(
            "/api/v1/auth/login",
            data={"username": "user@example.com", "password": "secure123"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert res_login.status_code == 200
        token = res_login.json()["access_token"]

        # 3. Get current user info
        res_me = await ac.get(
            "/api/v1/users/me",
            headers={"Authorization": f"Bearer {token}"}
        )
        assert res_me.status_code == 200
        assert res_me.json()["email"] == "user@example.com"

        # 4. Logout
        res_logout = await ac.post(
            "/api/v1/auth/logout",
            headers={"Authorization": f"Bearer {token}"}
        )
        assert res_logout.status_code in (200, 204)
