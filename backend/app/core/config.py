from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    MONGODB_URL: str
    MONGODB_DB: str
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    USER_COLLECTION: str
    CONTACT_COLLECTION: str
    QR_HISTORY_COLLECTION: str

    model_config = SettingsConfigDict(env_file=".env")

settings = Settings()
