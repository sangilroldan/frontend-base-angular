const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_cognito_region": "us-east-1",
    "aws_user_pools_id": "us-east-1_JHBTV1AoI",
    "aws_user_pools_web_client_id": "6eh4c0qchf0tvj9ja7ualiae4q",
    "oauth": {
        "domain": "pasaportes-app-ab3-16928129.auth.us-east-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "http://localhost:4200",
        "redirectSignOut": "http://localhost:4200",
        "responseType": "code"
    }
};

export default awsmobile;