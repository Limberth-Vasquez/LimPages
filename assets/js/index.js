'use strict';

let copyright = document.getElementById('MyCopyright');
let age = document.getElementById('MyAge');
let experience = document.getElementById('MyExperience');

const GetYear = () =>
{ 
    var today = new Date();
    var yyyy = today.getFullYear();
    return yyyy;

};
const GetToday = () =>
{ 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

    var yyyy = GetYear();
    today = dd + '/' + mm + '/' + yyyy;

    return today;

};
const SetDates = () =>
{
    copyright.innerText = 'Copyright © '+GetToday()+' All Right Reserved';
    age.innerText = GetYear() - 1996 + ' Years';
    experience.innerText = GetYear() - 2018 + ' Years';
};


SetDates();