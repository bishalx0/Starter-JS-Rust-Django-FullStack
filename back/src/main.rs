use axum::{http::Method, routing::get, Json, Router};
use serde::{Deserialize, Serialize};

use tower_http::cors::{Any, CorsLayer};

#[derive(Serialize, Deserialize, Clone)]
pub struct Dummy {
    id: String,
    msg: String,
}

async fn hello_world() -> Json<Dummy> {
    Json(Dummy {
        id: "1".to_string(),
        msg: "Rust: Hello World".to_string(),
    })
}
#[tokio::main]
async fn main() {
    let cors = CorsLayer::new()
        .allow_methods([Method::GET])
        .allow_origin(Any);
    let app = Router::new().route("/hello", get(hello_world)).layer(cors);
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
