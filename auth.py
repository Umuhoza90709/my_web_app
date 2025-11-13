def login(username, password):
    # Example: simple check
    if username == "admin" and password == "1234":
        return "Login successful"
    else:
        return "Login failed"

# Test the function
if __name__ == "__main__":
    print(login("admin", "1234"))
    print(login("user", "abcd"))
