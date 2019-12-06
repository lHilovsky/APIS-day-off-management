let today = new Date();
let isLoggedIn = 0;
let loggeduser;


function get_gravatar(email, size) {
    // MD5 (Message-Digest Algorithm) by WebToolkit
    // 
    var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};
    var size = size || 80;
    return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
}


function check_login() {
    if (isLoggedIn == 2) {
        $('#calendar__page').hide();
        $('#approvals__page').show();
        $('#login_page').hide();
        //$('.menu__item').removeClass('menu__item--active');
        //$(this).addClass('menu__item--active');
        $('.page').removeClass('visible');
        $('.page').addClass('hidden');
        $('#approvals__page').removeClass('hidden');
        $('#approvals__page').addClass('visible');
        $('#people_list').html('');
        $('#user-avatar').attr('src', get_gravatar(loggeduser.username+'@azurewebsites.net',70));
        user_name = loggeduser.username.split('.');
        full_name = user_name[0].charAt(0).toUpperCase() + user_name[0].slice(1) + ' ' +
                            user_name[1].charAt(0).toUpperCase() + user_name[1].slice(1);
        $('#user-avatar-name').text(full_name);
        $.get("api/employees/", function (obj) {
            $('#approvals__page').html('');
            $('#approvals__page').append(`<style type="text/css">
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
  </tr>`);
            obj.forEach(function (dejtaE) {
                $.get("api/EmployeeDayoffsRelations/", function (obj1) {
                    
                    obj1.forEach(function (dejtaED) {
                        if (dejtaE.ID === dejtaED.employee_ID) {
                            console.log('aa');
                            $.get("api/dayoffs/", function (obj2) {
                                obj2.forEach(function (dejtaD) {
                                    if (dejtaD.ID === dejtaED.dayoffs_ID) {
                                        console.log('bb');
                                        $.get("api/shifts/", function (obj3) {
                                            obj3.forEach(function (dejtaS) {
                                                if (dejtaD.shifts_ID === dejtaS.ID && dejtaD.confirmation==true) {
                                                    console.log('c');
                                                    var id_dayoffs = dejtaD.ID;
                                                    var name = dejtaE.name;
                                                    var surname = dejtaE.surname;
                                                    var work_date = dejtaS.work_date;
                                                    var reason = dejtaD.reason;
                                                    $('#approvals__page').append(`<tr>`);
                                                    $('#approvals__page').append(`
<td class="tg-0pky">
                    <div>Name: `+ name + ` ` + surname + `</div>
                    <div>Day: `+ work_date + `</div>
                    <div>Reason: `+ reason + `</div></td>
                `);
                                                    $('#approvals__page').append(`<td approval-id="approve-` + id_dayoffs + `" class="tg-0pky dashboard__request">Approve</td>`);
                                                    $('#approvals__page').append(`<td approval-id="reject-` + id_dayoffs + `" class="tg-0pky dashboard__request_remove">Decline</td>`);
                                                    $('#approvals__page').append('</tr>');
                                                }
                                            });
                                        });
                                    }
                                });
                            });
                        }
                    });
                });
            });
            $('#approvals__page').append(`
</table>`);
        });
    } else if (isLoggedIn == 1) {
        $('#login_page').hide();
        $('#approvals__page').hide();
        $('#calendar__page').show();
        //$('.menu__item').removeClass('menu__item--active');
        //$(this).addClass('menu__item--active');
        $('.page').removeClass('visible');
        $('.page').addClass('hidden');
        $('#calendar__page, #toolbar__page, #legend').removeClass('hidden');
        $('#calendar__page, #toolbar__page, #legend').addClass('visible');
        $('#people_list').html('');
        $('#user-avatar').attr('src', get_gravatar(loggeduser.username+'@azurewebsites.net',70));
        user_name = loggeduser.username.split('.');
        full_name = user_name[0].charAt(0).toUpperCase() + user_name[0].slice(1) + ' ' +
                            user_name[1].charAt(0).toUpperCase() + user_name[1].slice(1);
        $('#user-avatar-name').text(full_name);
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
                        "ID": Number(Date().now),
                        "employee_ID": loggeduser.ID,
                        "dayoffs_ID": data.ID
                    }
                    $.ajax({
                        type: "POST",
                        url: "api/EmployeeDayoffsRelations/",
                        contentType: "application/json",
                        dataType: "json",
                        data: JSON.stringify(objwxt2),
                        success: function (data) { },
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




$(document).ready(function () {
    $("#but_submit").click(function () {
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
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedMonth = currentMonth;
let selectedYear = currentYear;
// let selectYear = $('#jump-to-date > #select-years');
// let selectMonth = $('#jump-to-date > #select-months');

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = $(".current-month-year");
let nextMonthAndYear = $(".next-month-year");
let previousMonthAndYear = $(".previous-month-year");
showCalendar(currentMonth, currentYear);


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
        $.get("api/dayoffs/" + change[1] + "/", function (el) {
            $.ajax({
                type: "DELETE",
                url: "api/EmployeeDayoffsRelations/" + el.ID + "/",
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
        });

    }
});






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
$(document).on('click','[day-of-month]',function(e) {
    // $(e.target).attr('day-of-month'); // toto je dany datum - poslat niekam do funkcie asi
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
        // [:TODO:] pridat zeby sa nieco zmenilo na dashboarde
        fillUpDashboard(e.target.parentElement);

    }
});

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
                shift_id_change = 0;
            }
        });
    });
    
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

// function jump() {
//     currentYear = parseInt($('#jump-to-date > #select-months > option.currMonth'));
//     currentMonth = parseInt($('#jump-to-date > #select-years > option.currYear'));
//     showCalendar(currentMonth, currentYear);
// }

function showCalendar(month, year) {
    selectedMonth = month;
    selectedYear = year;
    let firstDay = ((new Date(year, month)).getDay()===0?7:(new Date(year, month)).getDay());
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = $(".calendar"); // body of the calendar

    // clearing all previous cells
    tbl.html('');

    // filing data about month and in the page via DOM.
    nextMonth = (month==11?0:month+1);
    nextYear = (month==11?year+1:year);
    previousMonth = (month==0?11:month-1);
    previousYear = (month==0?year-1:year);
    monthAndYear.text(months[month] + " " + year);
    nextMonthAndYear.text(months[nextMonth] + " " + nextYear);
    previousMonthAndYear.text(months[previousMonth] + " " + previousYear);
    
 //    selectYear.html('');
 //    for (var i = -5 ; i <= 5; i++) {
 //     if (i==0) {
 //         selectYear.append(`<option dropdown-type="year" value="`+Number(year+i)+`">`+Number(year+i)+`</option>`);
 //     } else {
 //         selectYear.append(`<option dropdown-type="year" value="`+Number(year+i)+`">`+Number(year+i)+`</option>`);
 //     }
 //    }
    // selectMonth.html('');
 //    for (var i = 1 ; i <= 12; i++) {
 //     if (i==month+1) {
 //         selectMonth.append(`<option dropdown-type="month" value="`+Number(i)+`">`+Number(i)+`</option>`);
 //     } else {
 //         selectMonth.append(`<option dropdown-type="month" value="`+Number(i)+`">`+Number(i)+`</option>`);
 //     }
 //    }
 //    $('#jump-to-date > select').change(function (e) {
    //     if (e.attr('dropdown-type') == 'month') {
    //      $('.select-months > option[selected]').removeAttr('selected'); e.attr('selected',true);
    //     }
    //     if (e.attr('dropdown-type') == 'year') {
    //      $('.select-years > option[selected]').removeAttr('selected'); e.attr('selected',true);
    //     }
    // });

    // creating all cells
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
            </div>`;// weekdays header
    // $('#current-month-year').click(function() {
    //  if ($('#jump-to-date').is(':visible')) {
    //      $('#jump-to-date').hide();
    //  } else {
    //      $('#jump-to-date').show();
    //  }
    // });
    tbl.append(calendar_header); // adding header with weekdays.
    for (let i = 0; i < 6; i++) {// calendar
        let row = $(`<div class="calendar__week"></div>`);// creates a calendar week

        for (let j = 1; j <= 7; j++) {//creating individual cells, filing them up with day numbers.
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
                // break;
            }
            else {
                let cellText = date;
                let lc = String(cellText).length;
                let currentId = `id_`+year+`_`+Number(month+1)+`_`+cellText+`_date`;
                let cell = $(`<div id="` + currentId + `" class="calendar__day day" day-of-month="` + year + `-` + Number(month + 1) + `-` + (lc == 1 ? '0' + cellText : cellText)+`"></div>`);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.addClass("calendar__current_day");
                    cell.addClass("calendar__selected_day");
                } // color today's date
                var currentCounter = 0;
 
                    $.get(`shifts/employee/`+year+`-`+Number(month+1)+`-`+cellText, function (data) {
                        data.forEach(function (el) {
                            abbr = el.name[0] + el.surname[0];
                            name = el.name + ' ' + el.surname;
                            cell.append(`<div ` +
                                `user-name = "` + name + `" ` +
                                `user-abbr="` + abbr + `" ` +
                                `user-id="` + el.ID + `" ` +
                                `class="calendar__people" style="` + toRGB(name) + `"` +
                                `>` + abbr + `</div>`);
                            currentCounter += 1;
                        });
                    
                });
                //names = ["Edvards Adel", "Rosheen Ghassan", "Ayaka Nor", "Vassily Bishal", "Rene Lachtna", "Bistra Ayomide", "Toki Odovacar", 
                //"Nuria Zakkai", "Arthur Jabin", "Shaked Reynold", "Olga Bozena", "Irvine Nirmala", "Constant Jarmil", "Vlatka Torvald"]
                //nameAbbr = ["EA", "RG", "AN", "VB", "RL", "BA", "TO", "NZ", "AJ", "SR", "OB", "IN", "CJ", "VT"];
                //if (j*(i+1)%7!==0 && j%6!==0) { // simulate queries
                //    // [:TODO:] pridat citanie z databazy
                //    for (var q = 0 ; q < names.length; q++) {
                   //     if (Math.floor(Math.random() * 10)%2==0) {
                   //         cell.append(`<div `+
                   //           `user-name = "`+names[q]+`" `+
                   //           `user-abbr="`+nameAbbr[q]+`" `+
                   //           `user-id="`+Number(q+1)+`" `+
                   //           `class="calendar__people" style="`+toRGB(names[q])+`"`+
                   //           `>`+nameAbbr[q]+`</div>`);
                   //         currentCounter+=1;
                   //     }
                //    }
                //}
                if (currentCounter>=10) {
                    cell.addClass("calendar__full_day");
                } else if (currentCounter>=6) {
                    cell.addClass("calendar__almost_full_day");
                } else if (currentCounter>=0) {
                    cell.addClass("calendar__not_full_day");
                }
                cell.append(`<div class="calendar__number">`+date+`</div>`);
                row.append(cell);
                date++;
            }
        }
        tbl.append(row); // appending each row into calendar body.
    }
}function toRGB(string) {
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
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) /1000);
    if(o > 125) {
        text_color = 'black';
    }else{ 
        text_color = 'white';
    }
    return `background-color: rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}); color: `+text_color+`;`;
}

// function toRGB(string) {
//     var colors = ["#e51c23", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#5677fc", "#03a9f4", "#00bcd4", "#009688", "#259b24", "#8bc34a", "#afb42b", "#ff9800", "#ff5722", "#795548", "#607d8b"]
    
//     var hash = 0;
//     if (string.length === 0) return hash;
//     for (var i = 0; i < string.length; i++) {
//         hash = string.charCodeAt(i) + ((hash << 5) - hash);
//         hash = hash & hash;
//     }
//     hash = ((hash % colors.length) + colors.length) % colors.length;
//     return colors[hash];
// }