let userKey = 'USER'

jQuery(() => {
    if(localStorage.getItem(userKey) != null){
        $('.nonlogged-header').addClass('hide')
        $('.logged-header').removeClass('hide')
        $('.tiny-profile .name').text(localStorage.getItem(userKey).split(',')[1])
    }

    $('.loggedin-image').on('click', () => {
        $(".profile-dropdown").removeClass('hide')
        setTimeout(() => {$(document).on('click', e => {
            let container = $(".profile-dropdown")
    
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.addClass('hide')
                $(document).off('click')
            }
        })}, 20)  
    })

    $('.logout-btn').on('click', () => {
        localStorage.removeItem(userKey)
        location.reload()
    })

    $(".header-login").on('click', () => {
        $(".login-regist-wrapper").removeClass("hide")
        setTimeout(() => {$(document).on('click', e => {
            let container = $(".login-regist-wrapper > *")
    
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                container.addClass('hide')
                $(".login-regist-wrapper").addClass("hide")
                $(document).off('click')
            }
        })}, 120)  
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