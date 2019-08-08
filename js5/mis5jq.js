$("form").on("click", function() {
    var timer = null;
    $.ajax({
        type: 'POST',
        url: '/carrots-admin-ajax/a/login',
        data: $('#login1').serialize(),
        
        dataType: 'json',
        success: function(data) {
            console.log(data);
            if (data.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
               $('#errors').html(data.message);
                timer = setTimeout(function() {
                    $('#errors').html('');
                }, 3000)
            }
        }
    })
    
    return false;//阻止表单默认提交行为
})

console.log("132");