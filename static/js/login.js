function handlesubmit(){
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    // console.log(userName.value, password.value)
    if (!userName || !password ){
        return alert("Username/Password required");
    }

    if (userName.toLowerCase() !== 'admin'
        || password !== 'admin'){
        return alert("Username/Password invalid");
    }

   const user = {
    userName: userName,
    password: password
   }

    localStorage.setItem('user', JSON.stringify(user));

    window.location = "/templates/resume.html"
}