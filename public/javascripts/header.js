let userKey = 'USER'

jQuery(() => {
    $(".header-login").on('click', () => {
        $(".login-regist-wrapper").removeClass("hide")
        $(".user-login").removeClass("hide")
    })

    $(".user-login .change-btn p span").on('click', ()=> {
        $(".user-login").addClass("hide")
        $(".user-regist").removeClass("hide")
    })

    $(".user-regist .change-btn p span").on('click', ()=> {
        $(".user-regist").addClass("hide")
        $(".user-login").removeClass("hide")
        $(".user-regist .second").addClass("hide")
        $(".user-regist .first").removeClass("hide")
    })

    $(".change-btn div").on('click', ()=> {
        $(".user-regist .second").removeClass("hide")
        $(".user-regist .first").addClass("hide")
    })

    $(".user-login form").on('submit', e => {
        e.preventDefault()

        let email = $("#email-login").val()
        let password = $("#password-login").val()

        let form = $(".user-login form")

        if(email == "" || password == "") {
            alert("Please fill in all the fields")
        } else {
            $.ajax({
                type: 'POST',
                url: '/login',
                data: form.serialize(),
                success: res => {
                    try {
                        res = JSON.parse(res)
                    } catch(_) {
                    }
                    if(typeof res == "string") {
                        alert(res)
                    } else {
                        localStorage.setItem(userKey, res)
                        console.log(res[1])
                        alert('login successful, welcome ' + res[1])
                        location.reload()
                    }
                },
                error: err => {
                    alert(err.message)
                }
            })
        }
    })

    $(".user-regist form").on('submit', e => {
        e.preventDefault()
        let form = $(".user-regist form")

        console.log(form.serialize())

        $.ajax({
            type: 'POST',
            url: '/register',
            data: form.serialize(),
            success: res => {
                alert('Register successful')
                location.reload()
            },
            error: err => {
                alert(err.message)
            }
        })
    })
})