function populate(s1,s2){
    var s1=document.getElementById(s1)
    var s2=document.getElementById(s2)

    s2.innerHTML=""

    if(s1.value=="haryana"){
        var optionArray=[
            'faridabad|Faridabad','karnal|Karnal','rohtak|Rohtak','panipat|Panipat','rewari|Rewari'
        ]
    }else if(s1.value=="west bengal"){
        var optionArray=[
            'malda|Malda','murshidabad|Murshidabad','kolkata|Kolkata','bardawan|Bardawan','darjeeling|Darjeeling'
        ]
    }else if(s1.value=="kerala"){
        var optionArray=[
            'kannur|Kannur','thrissur|Thissur','kollam|Kollam','palakkad|Palakkad','kottayam|Kottayam'
        ]
    }else if(s1.value=="tamilnadu"){
        var optionArray=[
            'madurai|Madurai','erode|Erode','salem|Salem','vellore|Vellore','theni|Theni'
        ]
    }
    for(var option in optionArray){
        var pair=optionArray[option].split("|")
        var newoption=document.createElement("option")

        newoption.value=pair[0]
        newoption.innerHTML=pair[1]
        s2.options.add(newoption)
    }
}