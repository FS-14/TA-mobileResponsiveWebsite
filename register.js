const BASE_API = "https://65316f724d4c2e3f333d00da.mockapi.io";

const fetcher = async ({ endpoint = "", config = {} }) => {
  try {
    const response = await fetch(`${BASE_API}/${endpoint}`, config);
    const data = await response.json();

    return {
      data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

const handleSubmit = (e) => {
  e.preventDefault();

  const inputName = document.getElementById("username").value;
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  
  if (
    inputName == "" &&
  inputEmail == "" &&
  inputPassword == ""
  ) {
    alert("Please fill the field");
  } else {
    fetcher({
      endpoint: "users",
      config: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          email: inputEmail,
          password: inputPassword,
        }),
      },
    });
    alert("Register Successful");
    inputName = "";
    inputEmail = "";
    inputPassword = "";
  }
  };

document.getElementById("form").onsubmit = handleSubmit;