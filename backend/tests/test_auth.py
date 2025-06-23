import pytest
from httpx import AsyncClient
from httpx._transports.asgi import ASGITransport
from app.main import app

@pytest.mark.asyncio
async def test_auth_flow():
    transport = ASGITransport(app=app)
    async with AsyncClient(
        base_url="http://test", transport=transport, follow_redirects=True
    ) as ac:
        # Register
        res_register = await ac.post(
            "/api/v1/auth/register",
            json={"name": "Jenifer Pham", "email": "user@example.com", "password": "123456"},
        )
        assert res_register.status_code == 200
        token = res_register.json()["access_token"]
        assert token

        # Login
        res_login = await ac.post(
            "/api/v1/auth/login",
            data={"username": "user@example.com", "password": "123456"},
            headers={"Content-Type": "application/x-www-form-urlencoded"},
        )
        assert res_login.status_code == 200
        token = res_login.json()["access_token"]
        assert token

        # Logout
        res_logout = await ac.post(
            "/api/v1/auth/logout",
            headers={"Authorization": f"Bearer {token}"}
        )
        assert res_logout.status_code in (200, 204)
