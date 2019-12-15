let today = new Date();
let isLoggedIn = 0;
let loggeduser;
//let benevolentnaBulharskaKonstantaDovolenky = 48; // v dnoch
let benevolentnaBulharskaKonstantaDovolenky = 13; // v dnoch dajme tomu ze kazdy uz zobral tak ~35 dni volna, kedze je december, a nejake sa mozno prenesu do dalsieho roka
let fullDays = new Array();
let emptyDays = new Array();
let overstaffedDays = new Array();

function get_gravatar(email, size) {
    // # MD5 hash pre gravatar
    var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    var size = size || 80;
    return 'https://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
}


// # Check login, meni stranky podla login statusu
function check_login() {
    if (isLoggedIn == 2) {
        // # Zobrazi manazersky dashboard
        $('#calendar__page').hide();
        $('#approvals__page').show();
        $('#login_page').hide();
        $('.page').removeClass('visible');
        $('.page').addClass('hidden');
        $('#approvals__page').removeClass('hidden');
        $('#approvals__page').addClass('visible');
        $('#people_list').html('');
        $('#user-avatar').attr('src', get_gravatar(loggeduser.username + '@gmail.com', 70));
        user_name = loggeduser.username.split('.');
        full_name = user_name[0].charAt(0).toUpperCase() + user_name[0].slice(1) + ' ' +
                            user_name[1].charAt(0).toUpperCase() + user_name[1].slice(1);
        $('#user-avatar-name').text(full_name);
        // # Tabulka potvrdeni volna pre manazera
        $.get("api/employees/", function (obj) {
            $('#approvals__page').html('');
            let cell = $(`<style type="text/css">
                                            .tg  {border-collapse:collapse;border-spacing:0;}
                                            .tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
                                            .tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
                                            .tg .tg-0lax{text-align:left;vertical-align:top}
                                            .tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
                                        </style>
                                        <table class="tg" style="undefined;table-layout: fixed; width: 514px">
                                            <colgroup>
                                                <col style="width: 165px">
                                                <col style="width: 161px">
                                                <col style="width: 188px">
                                            </colgroup>
                                            <tr>
                                                <th class="tg-0lax" colspan="3">Approvals</th>
                                            </tr></table>`);
            obj.forEach(function (dejtaE) {
                $.get("api/EmployeeDayoffsRelations/", function (obj1) {
                    obj1.forEach(function (dejtaED) {
                        if (dejtaE.ID === dejtaED.employee_ID) {
                            $.get("api/dayoffs/", function (obj2) {
                                obj2.forEach(function (dejtaD) {
                                    if (dejtaD.ID === dejtaED.dayoffs_ID) {
                                        $.get("api/shifts/", function (obj3) {
                                            obj3.forEach(function (dejtaS) {
                                                if (dejtaD.shifts_ID === dejtaS.ID && dejtaD.confirmation==true) {
                                                    var id_dayoffs = dejtaD.ID;
                                                    var name = dejtaE.name;
                                                    var surname = dejtaE.surname;
                                                    var work_date = dejtaS.work_date;
                                                    var reason = dejtaD.reason;
                                                    let cell2 = $(`<tr></tr>`);
                                                    cell2.append(`
                                                        <td class="tg-0pky">
                                                        <div>Name: `+ name + ` ` + surname + `</div>
                                                        <div>Day: `+ work_date.split('T')[0] + `</div>
                                                        <div>Reason: `+ reason + `</div>
                                                        </td>`);
                                                    cell2.append(`<td approval-id="approve-` + id_dayoffs + `" class="tg-0pky dashboard__request">Approve</td>`);
                                                    cell2.append(`<td approval-id="reject-` + id_dayoffs + `" class="tg-0pky dashboard__request_remove">Decline</td>`);
                                                    cell.append(cell2);
                                                }
                                            });
                                            $('#approvals__page').append(cell);
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            });

            // # Statistika
            $('.dashboard').html('');
            $('.dashboard').append('<div>In this month, ' + months[currentMonth] + '. ' + currentYear + ', there are ' + overstaffedDays.length + ' overstaffed days, ' + fullDays.length + ' fully staffed days and ' + emptyDays.length + ' understaffed days.</div>');
            $('.dashboard').append('<br />');
            $('.dashboard').append('<div>Overstaffed days: </div>');
            if (overstaffedDays.length > 0) {
                overstaffedDays.forEach(function (el) {
                    $('.dashboard').append('<div>' + el + '</div>');
                });
            }
            $('.dashboard').append('<br />');
            $('.dashboard').append('<div>Understaffed days: </div>');
            if (emptyDays.length > 0) {
                emptyDays.forEach(function (el) {
                    $('.dashboard').append('<div>' + el + '</div>');
                });
            }

            // # Kto pracoval najviac dni cez vikendy
            $('.dashboard').append('<br />');
            $.get("dayoffs/pdfAll/" + loggeduser.ID + "/" + today.getFullYear() + '-' + Number(today.getMonth() + 1) + "-1/", function (obj) {
                full_name = obj[0].name + ' ' + obj[0].surname;
                days_worked = obj[0].email;
                $('.dashboard').append('<div>Employee ' + full_name + ' had worked the largest ammount of weekend days in this month (' + days_worked + ').</div>');
            });
        });
    } 
    else if (isLoggedIn == 1) {
        $('#export-pdf').show();
        // # Konrola volnych dni
        $.get("api/EmployeeDayoffsRelations/", function (el) {
            if (typeof el.length != "undefined") {
                var number = benevolentnaBulharskaKonstantaDovolenky;
                el.forEach(function (eli) {
                    if (eli.employee_ID === loggeduser.ID) {
                        number = number - 1;
                    }
                });
                $("#numOfHolidayDaysLeft").html(number);
            }
        });

        // # Kontrola toho kolko este treba odpracovat hodin
        $.get("api/EmployeeShiftsRelations/", function (el) {
            let hoursToWork = 200; // # konstanta hodin ktore treba odpracovat cez mesiac
            if (typeof el.length != "undefined") {
                el.forEach(function (eli) {
                    if (eli.employee_ID === loggeduser.ID) {
                        $.get("api/shifts/" + eli.shifts_ID + "/", function (elii) {
                            hoursToWork = hoursToWork - Number(elii.end_work_hour - elii.start_work_hour);
                            $("#numOfWorkDaysLeft").html(Math.round(Number(hoursToWork)));
                        });
                    }
                });
            }
            else {
                $("#numOfWorkDaysLeft").html(Math.round(Number(hoursToWork)));
            }
            
        });
        // # Zobrazi kalendar
        $('#login_page').hide();
        $('#approvals__page').hide();
        $('#calendar__page').show();
        $('.page').removeClass('visible');
        $('.page').addClass('hidden');
        $('#calendar__page, #toolbar__page, #legend').removeClass('hidden');
        $('#calendar__page, #toolbar__page, #legend').addClass('visible');
        $('#people_list').html('');
        $('#user-avatar').attr('src', get_gravatar(loggeduser.username +'@gmail.com',70));
        user_name = loggeduser.username.split('.');
        full_name = user_name[0].charAt(0).toUpperCase() + user_name[0].slice(1) + ' ' +
                            user_name[1].charAt(0).toUpperCase() + user_name[1].slice(1);
        $('#user-avatar-name').text(full_name);

        // # Zobrazi zmenu sichty
        $.get("api/users/" + loggeduser.ID, function (user) {
            var approveRequest = '<div class="dashboard__request" shift-change="approve-' + user.change_request + '-'+user.shift_change+ '">Approve change</div>';
            var rejectRequest = '<div class="dashboard__request_remove" shift-change="reject-' + user.change_request + '-' + user.shift_change + '">Reject change</div>';
           $.get("api/users/", function (el) {
                el.forEach(function (eli) {
                    if (user.change_request === eli.ID) {
                        user_name = eli.username.split('.');
                        abbr = user_name[0].charAt(0).toUpperCase() + user_name[1].charAt(0).toUpperCase();
                        full_name = user_name[0].charAt(0).toUpperCase() + user_name[0].slice(1) + ' ' +
                            user_name[1].charAt(0).toUpperCase() + user_name[1].slice(1);
                        $('#people_list').append('<div ' +
                            'style = "' + toRGB(eli.username) + '" ' +
                            'class = "calendar__people"' +
                            'user-name = "' + full_name + '" ' +
                            'user-abbr = "' + abbr + '" ' +
                            'user-id = "' + eli.ID + '"' +
                            '>' + abbr + '</div>' +
                            '<div class="dashboard__name"' +
                            '>' + full_name + '</div>' + approveRequest + rejectRequest);
                        setTimeout(check_login, 10000);
                    }
                });
            });
        });
    }
    else {
        // # Zobrazi login page
        $('#approvals__page').hide();
        $('#calendar__page').hide();
        $('#login_page').show();
        $('.page').removeClass('visible');
        $('.page').addClass('hidden');
        $('#login__page').removeClass('hidden');
        $('#login__page').addClass('visible');
        $('#people_list').html('');
        $('#user-avatar').attr('src', 'https://picsum.photos/70');
        $('#user-avatar-name').text('Not logged in.');
    }
}
check_login();



// # Poslanie poziadavky volneho dna
$(document).ready(function () {
    $(document).on('click', "#but_submit_dayoff", function (e) {
        var reason = $("#txt_reason_dayoff").val().trim();
        var shift_id = Number($("#message_dayoff").attr('shift-id'));
        $.get("api/dayoffs/", function (el) {
            objwxt = {
                "reason": reason,
                "confirmation": true,
                "shifts_ID": shift_id
            }
            $.ajax({
                type: "POST",
                url: "api/dayoffs/",
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify(objwxt),
                success: function (data) {
                    objwxt2 = {
                        "employee_ID": loggeduser.ID,
                        "dayoffs_ID": data.ID
                    }
                    $.ajax({
                        type: "POST",
                        url: "api/EmployeeDayoffsRelations/",
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(objwxt2),
                        success: function (data) { check_login() },
                        failure: function (errMsg) {
                            alert(errMsg);
                        }
                    });
                },
                failure: function (errMsg) {
                    alert(errMsg);
                }
            });
        });
    });
});

// # Tlacidlo exportu PDF
$(document).ready(function () {
    $(document).on('click', "#export-pdf", function (e) {
        $.get("dayoffs/pdfAll/" + loggeduser.ID + "/" + today.getFullYear() + '-' + Number(today.getMonth() + 1) + "/", function (obj) {
            user_name = loggeduser.username.split('.');
            full_name = user_name[0].charAt(0).toUpperCase() + user_name[0].slice(1) + ' ' +
                user_name[1].charAt(0).toUpperCase() + user_name[1].slice(1);
            var pdf = new jsPDF(
                {
                    orientation: 'p',
                    unit: 'mm',
                    format: 'a4',
                    putOnlyUsedFonts: true
                });
            pdf.setFontSize(20);
            pdf.setPage(1);
            pdf.text('Day-off report card for ' + full_name, 20, 30);
            pdf.setFontSize(10);
            number = 50;
            if (typeof obj.length != "undefined") {
                pdf.text('Number of paid days off scheduled in December: ' + obj.length, 20, number);
                obj.forEach(function (el) {
                    number = number + 5;
                    pdf.text('Date: ' + el.date_of_birth.split('T')[0] + ', Reason: ' + el.email + '.', 20, number);
                });
            }
            number = number + 10;
            pdf.text('Paid leave left in current work year (in days): ' + $("#numOfHolidayDaysLeft").html(), 20, number);
            number = number + 10;
            pdf.text('This document was generated on ' + today.getDate() + '.' + Number(today.getMonth() + 1) + '.' + today.getFullYear() + '.', 120, number);
            pdf.output('save', 'dayoff_report_' + user_name[0] + '_' + user_name[1] + '_' + Number(today.getMonth() + 1) + '_' + today.getFullYear()+'.pdf');
        });
        
    });
});



// # Login 
$(document).ready(function () {
    $(document).on('click',"#but_submit", function () {
        var username = $("#txt_uname").val().trim();
        var password = $("#txt_pwd").val().trim();
        console.log(username);
        console.log(password);
        if (username != "" && password != "") {
            $.get("api/users/", function (el) {
                el.forEach(function (eli) {
                    if (eli.username === username) {
                        if (eli.password === password) {
                            if (eli.isManager) {
                                isLoggedIn = 2;
                            }
                            else {
                                isLoggedIn = 1;
                            }
                            loggeduser = eli;
                        }
                        else {
                            alert('Username or password is incorrect.');
                        }
                    }
                });
                check_login();
            });
        }
    });
});


// # Riesenie kalendara
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedMonth = currentMonth;
let selectedYear = currentYear;

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = $(".current-month-year");
let nextMonthAndYear = $(".next-month-year");
let previousMonthAndYear = $(".previous-month-year");
showCalendar(currentMonth, currentYear);


// # Manazer potvrdenie volna
$(document).on('click', '[approval-id]', function (e) {
    var change = $(e.target).attr('approval-id').split('-');
    if (change[0] === "approve") {
        $.get("api/dayoffs/" + change[1] + "/", function (el) {
            el.confirmation = 0;
            $.ajax({
                type: "PUT",
                url: "api/dayoffs/" + change[1] + "/",
                contentType: "application/json",
                data: JSON.stringify(el)
            }).done(function () {
                check_login();});
        });
    }
    else if (change[0] === "reject") {
        $.get("api/EmployeeDayoffsRelations/", function (el) {
            if (typeof el.length != "undefined") {
                el.forEach(function (eli) {
                    if (eli.dayoffs_ID == Number(change[1])) {
                        $.ajax({
                            type: "DELETE",
                            url: "api/EmployeeDayoffsRelations/" + eli.ID + "/",
                            success: function () {
                                $.ajax({
                                    type: "DELETE",
                                    url: "api/dayoffs/" + change[1] + "/",
                                    success: function () {
                                        check_login();
                                    }
                                })
                            }
                        });
                    }
                });
            }
        });

    }
});


// # Zamestnanec potvrdenie zmeny sichty
$(document).on('click', '[shift-change]', function (e) {
    var change = $(e.target).attr('shift-change').split('-');
    if (change[0] === "approve") {
        $.get("api/EmployeeShiftsRelations/", function (eli) {
            eli.forEach(function (el) {
                if (el.employee_ID === Number(change[1]) && el.shifts_ID === Number(change[2])) {
                    el.employee_ID = loggeduser.ID;
                    $.ajax({
                        type: "PUT",
                        url: "/api/EmployeeShiftsRelations/" + el.ID + "/",
                        contentType: "application/json",
                        data: JSON.stringify(el)
                    });
                }
            });
        });
        $.get("api/users/", function (eli) {
            eli.forEach(function (el) {
                if (el.ID === loggeduser.ID) {
                    el.change_request = 0;
                    el.shift_change = 0;
                    $.ajax({
                        type: "PUT",
                        url: "/api/users/" + el.ID + "/",
                        contentType: "application/json",
                        data: JSON.stringify(el)
                    });
                }
            });
        });
    }
    else if (change[0]==="request") {
        $.get("api/users/", function (eli) {
            console.log(change);
            eli.forEach(function (el) {
                if (el.ID === Number(change[1])) {
                    el.change_request = loggeduser.ID;
                    el.shift_change = change[2];
                    console.log(el);
                    $.ajax({
                        type: "PUT",
                        url: "/api/users/" + el.ID + "/",
                        contentType: "application/json",
                        data: JSON.stringify(el)
                    });
                }
            });
        });
    }
    else {
        $.get("api/users/", function (eli) {
            eli.forEach(function (el) {
                if (el.ID === loggeduser.ID) {
                    el.change_request = 0;
                    el.shift_change = 0;
                    $.ajax({
                        type: "PUT",
                        url: "/api/users/" + el.ID + "/",
                        contentType: "application/json",
                        data: JSON.stringify(el)
                    });
                }
            });
        });
    }
    check_login();
    showCalendar(currentMonth, currentYear);
});


// # Tlacidlo dna v kalendari zobrazi v bocnej liste kazdeho kto ma sichtu v tom dni
$(document).on('click','[day-of-month]',function(e) {
    if ($(e.target).hasClass('calendar__invalid_day')) {
        var date = $(e.target).attr('day-of-month').split('_');
        if (date[1]-selectedMonth===0) {
            previous();
        } else if (date[1]-selectedMonth==12) {
            previous();
        } else {
            next();
        }
    } else if (typeof $(e.target).attr('day-of-month') !== "undefined") {
        $('[day-of-month]').removeClass('calendar__selected_day');
        $(e.target).addClass('calendar__selected_day');
        fillUpDashboard(e.target);
    } else if ($(e.target).hasClass('calendar__people')) {
        fillUpDashboard(e.target.parentElement);

    }
});


// # Samotne vyplnenie bocnej listy zamestnancami po kliknuti na kalendar
function fillUpDashboard(e) {
    $('#people_list').html('');

    $.get("api/shifts/", function (eli) {
        eli.forEach(function (el) {
            let shift_id_change;
            if (el.work_date.split('T')[0] === $(e).attr('day-of-month')) {
                shift_id_change = el.ID;
                if (typeof e.className === "undefined") {
                    className = e.attr('class');
                } else {
                    className = e.className;
                }
                if (typeof e.id === "undefined") {
                    idName = e.attr('id');
                } else {
                    idName = e.id;
                }
                var tempString = '#' + idName + '.' + className.replace(/ /g, '.');
                var tempDiv = $(tempString + `>div.calendar__people[user-id]`);
                for (var i = 0; i < tempDiv.length; i++) {
                    var requestChange = '<div class="dashboard__request" ' +
                        'user-id = "' + $(tempDiv[i]).attr('user-id') + '"' +
                        'shift-change="request-' + $(tempDiv[i]).attr('user-id') + '-' + shift_id_change + '" ' +
                        '>Request change</div>';
                    $('#people_list').append('<div ' +
                        'style = "' + toRGB($(tempDiv[i]).attr('user-name')) + '" ' +
                        'class = "calendar__people"' +
                        'user-name = "' + $(tempDiv[i]).attr('user-name') + '" ' +
                        'user-abbr = "' + $(tempDiv[i]).attr('user-abbr') + '" ' +
                        'user-id = "' + $(tempDiv[i]).attr('user-id') + '"' +
                        '>' + $(tempDiv[i]).attr('user-abbr') + '</div>' +
                        '<div class="dashboard__name"' +
                        '>' + $(tempDiv[i]).attr('user-name') + '</div>' + requestChange);
                }
                $('#dashboard').html('');
                $('#dashboard').append(`
                    <div id="div_login_dayoff">
                        <h1>Day off</h1>
                        <div id="message_dayoff" shift-id="`+el.ID+`"></div>
                        <div>
                            <input type="text" style="width:100%;margin-bottom: 1px;" class="textbox" id="txt_reason_dayoff" name="txt_reason_dayoff" placeholder="Reason" />
                            <!-- $('#txt_uname_dayoff').val() check if input is empty -->
                </div>
                        <div>
                            <input class="dashboard__request" type="button" value="Request day off" name="but_submit_dayoff" id="but_submit_dayoff" />
                        </div>
                    </div>`)
            }
            else {
                // # Ked je toto 0 tak sa nezobrazi potvrdenie kazdych 10?/5? sekund..
                shift_id_change = 0;
            }
        });
    });
}

// # Dalsi mesiac
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

// # Predchadzajuci mesiac
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

// # Zobrazi a vyplni kalendar
function showCalendar(month, year) {
    selectedMonth = month;
    selectedYear = year;
    let firstDay = ((new Date(year, month)).getDay()===0?7:(new Date(year, month)).getDay());
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = $(".calendar");

    tbl.html('');

    nextMonth = (month==11?0:month+1);
    nextYear = (month==11?year+1:year);
    previousMonth = (month==0?11:month-1);
    previousYear = (month==0?year-1:year);
    monthAndYear.text(months[month] + " " + year);
    nextMonthAndYear.text(months[nextMonth] + " " + nextYear);
    previousMonthAndYear.text(months[previousMonth] + " " + previousYear); 


    let date = 1;
    let calendar_header = `
            <div class="calendar__header">
                <div>mon</div>
                <div>tue</div>
                <div>wed</div>
                <div>thu</div>
                <div>fri</div>
                <div>sat</div>
                <div>sun</div>
            </div>`;

    tbl.append(calendar_header); 
    for (let i = 0; i < 6; i++) {
        // # Vytvori riadok
        let row = $(`<div class="calendar__week"></div>`);

        // # Vytvorenie stlpcov
        for (let j = 1; j <= 7; j++) {
            if (i === 0 && j < firstDay) {
                let cellText = 32 - new Date(year, month - 1, 32).getDate() - firstDay + j + 1;
                let lc = String(cellText).length;
                let cell = $(`<div class="calendar__day day" day-of-month="` + previousYear + `-` + Number(previousMonth + 1) + `-` + (lc == 1 ? '0'+cellText: cellText)+`"></div>`);
                cell.addClass("calendar__invalid_day");
                cell.append(`<div class="calendar__number">`+cellText+`</div>`);
                row.append(cell);
            }
            else if (date > daysInMonth) {
                let cellText = date % daysInMonth;
                let lc = String(cellText).length;
                let cell = $(`<div class="calendar__day day" day-of-month="` + nextYear + `-` + Number(nextMonth + 1) + `-` + (lc == 1 ? '0' + cellText : cellText)+`"></div>`);
                cell.addClass("calendar__invalid_day");
                cell.append(`<div class="calendar__number">`+cellText+`</div>`);
                row.append(cell);
                date++;
            }
            else {
                let cellText = date;
                let lc = String(cellText).length;
                let currentId = `id_`+year+`_`+Number(month+1)+`_`+cellText+`_date`;
                let cell = $(`<div id="` + currentId + `" class="calendar__day day" day-of-month="` + year + `-` + Number(month + 1) + `-` + (lc == 1 ? '0' + cellText : cellText)+`"></div>`);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.addClass("calendar__current_day");
                    cell.addClass("calendar__selected_day");
                }
 
                $.get(`shifts/employee/` + year + `-` + Number(month + 1) + `-` + cellText, function (data) {
                    var currentDate = year + '-' + Number(month + 1) + '-' + cellText;
                    if (typeof data.length != "undefined") {
                        // # Farbenie kalendara a ulozenie datumov do roznych poli
                        if (data.length >= 10) {
                            cell.addClass("calendar__full_day");
                            overstaffedDays.push(currentDate);
                        } else if (data.length >= 6) {
                            cell.addClass("calendar__almost_full_day");
                            fullDays.push(currentDate);
                        } else if (data.length >= 0) {
                            cell.addClass("calendar__not_full_day");
                            emptyDays.push(currentDate);
                        }
                        data.forEach(function (el) {
                            abbr = el.name[0] + el.surname[0];
                            name = el.name + ' ' + el.surname;
                            cell.append(`<div ` +
                                `user-name = "` + name + `" ` +
                                `user-abbr="` + abbr + `" ` +
                                `user-id="` + el.ID + `" ` +
                                `class="calendar__people" style="` + toRGB(name) + `"` +
                                `>` + abbr + `</div>`);
                        });

                    }
                });

                cell.append(`<div class="calendar__number">`+date+`</div>`);
                row.append(cell);
                date++;
            }
        }
        tbl.append(row);// # Pridanie riadku do kalendara
    }
}

// # Meno a priezvisko na farbu pozadia a farbu textu
function toRGB(string) {
    var hash = 0;
    if (string.length === 0) return hash;
    for (var i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
    }
    var rgb = [0, 0, 0];
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        rgb[i] = value;
    }
    var text_color = 'white';
    // # Vzorec pre vypocitanie farby textu podla pozadia
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
    if(o > 125) {
        text_color = 'black';
    }else{ 
        text_color = 'white';
    }
    return `background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}); color: `+text_color+`;`;
}