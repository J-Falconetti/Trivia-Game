var questright=0;
var questworng=0;
var GameQuest;


function check () {
    var quest1 = $("input[name='quest1']:checked").val();
        if(quest1 === "true"){        
            questright++
        }
        var quest2 = $("input[name='quest2']:checked").val();
            if(quest2 === "true"){        
                questright++
            }
                var quest3 = $("input[name='quest3']:checked").val();
                if(quest3 === "true"){        
                    questright++
                }
                var quest4 = $("input[name='quest4']:checked").val();
                if(quest4 === "true"){        
                    questright++
                }
                var quest5 = $("input[name='quest5']:checked").val();
                if(quest5 === "true"){        
                    questright++
                }
                var quest6 = $("input[name='quest6']:checked").val();
                if(quest6 === "true"){        
                    questright++
                    
                }
                var quest7 = $("input[name='quest7']:checked").val();
                if(quest7 === "true"){        
                    questright++
                }
                var quest8 = $("input[name='quest8']:checked").val();
                if(quest8 === "true"){        
                    questright++
                }
                var quest9 = $("input[name='quest9']:checked").val();
            if(quest9 === "true"){        
                questright++
            }
            var quest10 = $("input[name='quest10']:checked").val();
            if(quest10 === "true"){        
                questright++
            }
                questworng = 10 - questright
                alert("You got " + questright +" right and " + questworng + " wrong")
            }


$("#answers").on("click",check)

$("#start").on("click",function(event) {
    event.preventDefault ();
console.log("hello");
    setTimeout(check, 1000 * 60);
})
// setInterval look 

// $("input[type='radio']").on('change', function(value) {
//     var quest1 = $("input[name='quest1']:checked").val();
//     console.log(quest1);
//     if (value === true) {
//         console.log("true");
//         $("#correct").html("<h1>" + questright + "</h1>");
//         questright++;
// /}
// }
// )
// }