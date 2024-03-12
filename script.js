function create_break(){
    var variablename=document.createElement("br")
    return variablename
}
function label_checkbox(tagname,attrname,attrvalue,attrname2,attrvalue2,content){
   var variablename=document.createElement(tagname)
   variablename.setAttribute(attrname,attrvalue)
   variablename.setAttribute(attrname2,attrvalue2)
   variablename.innerHTML=content
   return variablename
}
function input_checkbox(tagname,attrname1,attrvalue1,atttrname3,attrvalue3){
var variablename=document.createElement(tagname)
variablename.setAttribute(attrname1,attrvalue1)
variablename.setAttribute(atttrname3,attrvalue3)
return variablename
}

var formSubmission=document.createElement("h2")
formSubmission.innerHTML="Form Submission"

var firstname=document.createElement("label")
// firstname.setAttribute("class",)
firstname.innerHTML="First Name:"
var break7=create_break()
var input_firstname=document.createElement("input")
input_firstname.innerHTML="first name"
input_firstname.setAttribute("type","text")
var break1=create_break()

var lastname=document.createElement("label")
lastname.innerHTML="Last Name:"
var break8=create_break()
var input_lastname=document.createElement("input")
input_lastname.innerHTML="last name"
input_lastname.setAttribute("type","text")
var break2=create_break()

var middlename=document.createElement("label")
middlename.innerHTML="Middle Name:"
var break9=create_break()
var input_middlename=document.createElement("input")
input_middlename.innerHTML="middle name"
input_middlename.setAttribute("type","text")
var break3=create_break()

var addressline1=document.createElement("label")
addressline1.innerHTML="Address Line1:"
var break10=create_break()
var input_addressline1=document.createElement("input")
input_addressline1.innerHTML="Address line1"
input_addressline1.setAttribute("type","text")
var break4=create_break()

var addressline2=document.createElement("label")
addressline2.innerHTML="Address Line2:"
var break11=create_break()
var input_addressline2=document.createElement("input")
input_addressline2.innerHTML="Address line2"
input_addressline2.setAttribute("type","text")
var break5=create_break()

var pincode=document.createElement("label")
pincode.innerHTML="Pincode:"
var break12=create_break()
var input_pincode=document.createElement("input")
input_pincode.innerHTML="pincode"
input_pincode.setAttribute("type","text")
var break6=create_break()

var radiobtn=document.createElement("label")
radiobtn.innerHTML="Gender:"
radiobtn.setAttribute("name","gender")
var break13=create_break()

var input_radiobtn1=document.createElement("input")
input_radiobtn1.setAttribute("type","radio")
input_radiobtn1.setAttribute("name","gender")
input_radiobtn1.setAttribute("id","male")
input_radiobtn1.setAttribute("class","space")
var Male_label=document.createElement("label")
Male_label.innerHTML="Male"
Male_label.setAttribute("for","male")
Male_label.setAttribute("class","space")

var input_radiobtn2=document.createElement("input")
input_radiobtn2.setAttribute("type","radio")
input_radiobtn2.setAttribute("name","gender")
input_radiobtn2.setAttribute("id","female")
input_radiobtn2.setAttribute("class","space")
var female_label=document.createElement("label")
female_label.innerHTML="Female"
female_label.setAttribute("for","female")
female_label.setAttribute("class","space")

var para_checkbox=document.createElement("p")
para_checkbox.innerHTML="Choice of Food: (must choose at least 2 out of 5 options)"

var checkbox_input=input_checkbox("input","type","checkbox","id","food")
var checkbox_label=label_checkbox("label","for","food","class","dish","North Indian")
var break14=create_break()

var checkbox_input1=input_checkbox("input","type","checkbox","id","food1")
var checkbox_label1=label_checkbox("label","for","food1","class","dish","South Indian")
var break15=create_break()

var checkbox_input2=input_checkbox("input","type","checkbox","id","food2")
var checkbox_label2=label_checkbox("label","for","food2","class","dish","Chinese")
var break16=create_break()

var checkbox_input3=input_checkbox("input","type","checkbox","id","food3")
var checkbox_label3=label_checkbox("label","for","food3","class","dish","Japanese")
var break17=create_break()

var checkbox_input4=input_checkbox("input","type","checkbox","id","food4")
var checkbox_label4=label_checkbox("label","for","food4","class","dish","Sea food")
var break18=create_break()


var label_select=document.createElement("label")
label_select.setAttribute("for","myselect")
label_select.innerHTML="State"
var break19=create_break()
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
label_select.append(select)
var break30=create_break()
document.body.append(label_select,break30)


var label_select1=document.createElement("label")
label_select1.setAttribute("for","myselect1")
label_select1.innerHTML="Country"
var break20=create_break()
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
label_select1.append(select1)
var break31=create_break()
document.body.append(label_select1,break31)
document.body.append(label_select1)

// var button=document.createElement("button")
// button.setAttribute("class",bg-primary)
// button.innerHTML="Submit"


document.body.append(formSubmission,firstname,break1,input_firstname,break7,middlename,break2,input_middlename,break8,
    lastname,break3,input_lastname,break9,addressline1,break4,input_addressline1,break10,addressline2,break5,input_addressline2,break11,pincode,break6,input_pincode,break12,   radiobtn,break13,input_radiobtn1,Male_label,input_radiobtn2,female_label,para_checkbox,checkbox_input,checkbox_label,checkbox_input1,checkbox_label1,break14,break15,checkbox_input2,checkbox_label2,checkbox_input3,checkbox_label3,checkbox_input4,checkbox_label4,break19,break20,break18,break16,break17)


function input_data(){
    // var temporary_database=document.createElement("div")
    // temporary_database.innerHTML="Temporary Database"
    // document.body.append(temporary_database)
}