
function label_checkbox(tagname,attrname,attrvalue,attrname2,attrvalue2,content){
   var variablename=document.createElement(tagname)
   variablename.setAttribute(attrname,attrvalue)
   variablename.setAttribute(attrname2,attrvalue2)
   variablename.innerHTML=content
   return variablename
}
function input_checkbox(tagname,attrname1,attrvalue1,atttrname3,attrvalue3,attrname4,attrvalue4,
    attrname5,attrvalue5,attrname6,attrvalue6){
var variablename=document.createElement(tagname)
variablename.setAttribute(attrname1,attrvalue1)
variablename.setAttribute(atttrname3,attrvalue3)
return variablename
}

var div7=document.createElement("div")

var formSubmission=document.createElement("h2")
formSubmission.innerHTML="Form Submission"
div7.append(formSubmission)

//firstname
var div8=document.createElement("div")
var firstname=document.createElement("label")
firstname.innerHTML="First Name:"

var input_firstname=document.createElement("input")
input_firstname.innerHTML="first name"
input_firstname.setAttribute("type","text")
input_firstname.setAttribute("id","fname")

// firstname.append(input_firstname)
div8.append(firstname,input_firstname)


//lastname
var div10=document.createElement("div")
var lastname=document.createElement("label")
lastname.innerHTML="Last Name:"

var input_lastname=document.createElement("input")
input_lastname.innerHTML="last name"
input_lastname.setAttribute("type","text")
input_lastname.setAttribute("id","lname")
div10.append(lastname,input_lastname)

//addressline1
var div11=document.createElement("div")
var addressline1=document.createElement("label")
addressline1.innerHTML="Address Line1:"

var input_addressline1=document.createElement("input")
input_addressline1.innerHTML="Address line1"
input_addressline1.setAttribute("type","text")
input_addressline1.setAttribute("id","addressline1")
div11.append(addressline1,input_addressline1)

//addressline2
var div12=document.createElement("div")
var addressline2=document.createElement("label")
addressline2.innerHTML="Address Line2:"

var input_addressline2=document.createElement("input")
input_addressline2.innerHTML="Address line2"
input_addressline2.setAttribute("type","text")
input_addressline2.setAttribute("id","addressline2")
div12.append(addressline2,input_addressline2)


//pincode
var div13=document.createElement("div")
var pincode=document.createElement("label")
pincode.innerHTML="Pincode:"

var input_pincode=document.createElement("input")
input_pincode.innerHTML="Pincode"
input_pincode.setAttribute("type","text")
input_pincode.setAttribute("id","pincode")
div13.append(pincode,input_pincode)

//radio btn
var div14=document.createElement("div")
var radiobtn=document.createElement("label")
radiobtn.innerHTML="Gender:"
radiobtn.setAttribute("name","gender")
div14.append(radiobtn)

var div15=document.createElement("div")
var input_radiobtn1=document.createElement("input")
input_radiobtn1.setAttribute("type","radio")
input_radiobtn1.setAttribute("name","gender")
input_radiobtn1.setAttribute("id","male")
input_radiobtn1.setAttribute("value","male")
input_radiobtn1.setAttribute("class","space")

var Male_label=document.createElement("label")
Male_label.innerHTML="Male"
Male_label.setAttribute("for","male")
Male_label.setAttribute("class","space")
div15.append(input_radiobtn1,Male_label)

var div16=document.createElement("div")
var input_radiobtn2=document.createElement("input")
input_radiobtn2.setAttribute("type","radio")
input_radiobtn2.setAttribute("name","gender")
input_radiobtn2.setAttribute("id","female")
input_radiobtn2.setAttribute("value","female")
input_radiobtn2.setAttribute("class","space")
var female_label=document.createElement("label")
female_label.innerHTML="Female"
female_label.setAttribute("for","female")
female_label.setAttribute("class","space")
div16.append(input_radiobtn2,female_label)

document.body.append(div7,div8,div10,div11,div12,div13,div14,div16,div15)


//checkbox
var div0=document.createElement("div")
var para_checkbox=document.createElement("p")
para_checkbox.innerHTML="Choice of Food: (must choose at least 2 out of 5 options)"
para_checkbox.setAttribute("name","FavFood")
div0.append(para_checkbox)

var div17=document.createElement("div")
var checkbox_input=input_checkbox("input","type","checkbox","id","food","name","FavFood","value","North Indian")
var checkbox_label=label_checkbox("label","for","food","class","dish","North Indian")
div17.append(checkbox_input,checkbox_label)

var div18=document.createElement("div")
var checkbox_input1=input_checkbox("input","type","checkbox","id","food1","name","FavFood","value","South Indian")
var checkbox_label1=label_checkbox("label","for","food1","class","dish","South Indian")
div18.append(checkbox_input1,checkbox_label1)

var div19=document.createElement("div")
var checkbox_input2=input_checkbox("input","type","checkbox","id","food2","name","FavFood","value","Chinese")
var checkbox_label2=label_checkbox("label","for","food2","class","dish","Chinese")
div19.append(checkbox_input2,checkbox_label2)

var div20=document.createElement("div")
var checkbox_input3=input_checkbox("input","type","checkbox","id","food3","name","FavFood","value","Japanese")
var checkbox_label3=label_checkbox("label","for","food3","class","dish","Japanese")
div20.append(checkbox_input3,checkbox_label3)

var div21=document.createElement("div")
var checkbox_input4=input_checkbox("input","type","checkbox","id","food4","name","FavFood","value","Sea food")
var checkbox_label4=label_checkbox("label","for","food4","class","dish","Sea food")
div21.append(checkbox_input4,checkbox_label4)

document.body.append(div0,div17,div18,div19,div20,div21)

var div22=document.createElement("div")
var label_select=document.createElement("label")
label_select.setAttribute("for","myselect")
label_select.innerHTML="State"
div22.append(label_select)

var div23=document.createElement("div")
var select=document.createElement("select")
select.setAttribute("id","mySelect")
var option0=document.createElement("option")
option0.innerHTML="state"
var option1=document.createElement("option")
option1.innerHTML="Bihar"
var option2=document.createElement("option")
option2.innerHTML="Tamil Nadu"
var option3=document.createElement("option")
option3.innerHTML="Andhra Pradhesh"
select.append(option0,option1,option2,option3)
div23.append(select)
document.body.append(div22,div23)

var div24=document.createElement("div")
var label_select1=document.createElement("label")
label_select1.setAttribute("for","myselect1")
label_select1.innerHTML="Country"
div24.append(label_select1)

var div25=document.createElement("div")
var select1=document.createElement("select")
select1.setAttribute("id","mySelect1")
var option00=document.createElement("option")
option00.innerHTML="country"
var option11=document.createElement("option")
option11.innerHTML="India"
var option22=document.createElement("option")
option22.innerHTML="America"
var option33=document.createElement("option")
option33.innerHTML="Canada"
select1.append(option00,option11,option22,option33)
div25.append(select1)

document.body.append(div24,div25)

var div26=document.createElement("div")
var btn=document.createElement("button")
btn.setAttribute("class","bg-primary")
btn.innerHTML="Submit"
btn.addEventListener("click",input_data)
div26.append(btn)
document.body.append(div26)


function input_data(){
    var temporary_database=document.createElement("div")
    var h3=document.createElement("h3")
    h3.innerHTML="Temporary Database"
    temporary_database.append(h3)
    document.body.append(h3)



    var getData1=document.getElementById("fname").value 
    var getData3=document.getElementById("lname").value
    var getData4=document.getElementById("addressline1").value 
    var getData5=document.getElementById("addressline2").value 
    var getData6=document.getElementById("pincode").value 
   
    var getData7=document.querySelector('input[name="gender"]:checked').value

    // var selectedFood = Array.from(document.getElementsByName("FavFood"))
    //    var getData8=selectedFood.filter(function(checkbox) {
    //         return checkbox.checked;
    //     })
    //     .map(function(checkbox) {
    //         return checkbox.value;
    //     });

    var food=document.getElementsByName("FavFood")
    var getData8=[]
    var foodCount=0
    var result=" "
    // console.log(food)
    for(var i=0;i<food.length;i++){
        if(food[i].checked){
            getData8.push(food[i].value)
            foodCount++
        }}
    
    if(getData8.length>=2){
         result=getData8.join(",")
    }else{
        result="No food selected"
    }



     var getData9=document.getElementById("mySelect").value 
     var getData10=document.getElementById("mySelect1").value
        
     

    var div000=document.createElement("div")
    var table=document.createElement("table")
    table.setAttribute("class","table-bordered")
    var thead=document.createElement("thead")
    thead.setAttribute("class","bg-secondary")
    var tr1=document.createElement("tr")
    var th1=document.createElement("th")
    th1.setAttribute("class","paddin")
    th1.innerHTML="First Name"
    
    var th3=document.createElement("th")
    th3.innerHTML="Last Name"
    th3.setAttribute("class","paddin")
    var th4=document.createElement("th")
    th4.innerHTML="Address Line1"
    th4.setAttribute("class","paddin")
    var th5=document.createElement("th")
    th5.innerHTML="Address Line2"
    th5.setAttribute("class","paddin")

    var th6=document.createElement("th")
    th6.innerHTML="Pincode"
    th6.setAttribute("class","paddin")

    var th7=document.createElement("th")
    th7.innerHTML="Gender"
    th7.setAttribute("class","paddin")

    var th8=document.createElement("th")
    th8.innerHTML="Choice of food"
    th8.setAttribute("class","paddin")
    
    var th9=document.createElement("th")
    th9.innerHTML="State"
    th9.setAttribute("class","paddin")

    var th10=document.createElement("th")
    th10.innerHTML="Country"
    th10.setAttribute("class","paddin")
    
    tr1.append(th1,th3,th4,th5,th6,th7,th8,th9,th10)
    thead.append(tr1)
    table.append(thead)

    //getting input after form submission
    var tr2=document.createElement("tr")
    var td1=document.createElement("td")
    td1.innerHTML=`${getData1}`

    var td3=document.createElement("td")
    td3.innerHTML=`${getData3}`

    var td4=document.createElement("td")
    td4.innerHTML=`${getData4}`

    var td5=document.createElement("td")
    td5.innerHTML=`${getData5}`

    var td6=document.createElement("td")
    td6.innerHTML=`${getData6}`
    
    var td7=document.createElement("td")
    td7.innerHTML=`${getData7}`
    
    var td8=document.createElement("td")
    td8.innerHTML=`${result}`

    var td9=document.createElement("td")
    td9.innerHTML=`${getData9}`

    var td10=document.createElement("td")
    td10.innerHTML=`${getData10}`
    



    tr2.append(td1,td3,td4,td5,td6,td7,td8,td9,td10)
    table.append(tr2)
    div000.append(table)
    document.body.append(div000)

}