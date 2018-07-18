const request = require('request');

const tcga_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_tcga_api/v3/';
// const target_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_target_api/v3/target/cases/TARGET-20-PABLDZ';
// const ccle_url = 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_ccle_api/v3/ccle/cases/FU-OV-1';

var handleResponse = (err, res, body) => {
    if (err) throw (err);
    console.log(body);
}

var get_case = function(case_barcode) {
    const options = {
        url : tcga_url + 'tcga/cases/' + case_barcode
    }
    console.log(options);
    request(options, handleResponse);
}

get_case('TCGA-02-0001');


var get_case_annotation = function(case_barcode){
    const options = {
        url : 'https://api-dot-isb-cgc.appspot.com/_ah/api/isb_cgc_tcga_api/v3/cases/'+ case_barcode + '/annotations'
               
    }
    console.log(options);
    request(options, handleResponse);
}

get_case_annotation('TCGA-02-0001');


var diana = function(case_barcode){
    get_case(case_barcode);
    get_case_annotation(case_barcode)
}




<<<<<<< HEAD
function addition(a, b) {
    return a + b;
}

function concat(a, b) {
    return a + ';' + b;
}

var addition = function(a, b){
    return a + b;
=======


var concat = function(a, b) {
    return a +';' +b;
}

var addition = function(a, b) {
    return a + b;
}

>>>>>>> 791f300c0a3275e3df76d2c52c800be7db031f0c
