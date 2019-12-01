let today = new Date();
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

function fillUpDashboard(e){
	$('#people_list').html('');
	if (typeof e.className==="undefined") {
		className = e.attr('class');
	} else {
		className = e.className;
	}
	if (typeof e.id==="undefined") {
		idName = e.attr('id');
	} else {
		idName = e.id;
	}
	var tempString = '#'+idName+ '.'+className.replace(/ /g, '.');
    var tempDiv = $(tempString+`>div.calendar__people[user-id]`);
    var requestChange = '<div class="dashboard__request" '+
    		'user-id = "'+$(tempDiv[i]).attr('user-id')+'"'+
    		'>Request change</div>';
    var removeRequest = '<div class="dashboard__request_remove" '+
    		'user-id = "'+$(tempDiv[i]).attr('user-id')+'"'+
    		'>Remove request</div>';
    for (var i = 0; i < tempDiv.length; i++) {
    	$('#people_list').append('<div '+
    		'style = "'+toRGB($(tempDiv[i]).attr('user-name'))+'" '+
    		'class = "calendar__people"'+
    		'user-name = "'+$(tempDiv[i]).attr('user-name')+'" '+
    		'user-abbr = "'+$(tempDiv[i]).attr('user-abbr')+'" '+
    		'user-id = "'+$(tempDiv[i]).attr('user-id')+'"'+
    		'>'+$(tempDiv[i]).attr('user-abbr')+'</div>'+
    		'<div class="dashboard__name"'+
    		'>'+$(tempDiv[i]).attr('user-name')+'</div>'+(i%2==0?requestChange:removeRequest));
    }
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
 //    	if (i==0) {
 //    		selectYear.append(`<option dropdown-type="year" value="`+Number(year+i)+`">`+Number(year+i)+`</option>`);
 //    	} else {
 //    		selectYear.append(`<option dropdown-type="year" value="`+Number(year+i)+`">`+Number(year+i)+`</option>`);
 //    	}
 //    }
	// selectMonth.html('');
 //    for (var i = 1 ; i <= 12; i++) {
 //    	if (i==month+1) {
 //    		selectMonth.append(`<option dropdown-type="month" value="`+Number(i)+`">`+Number(i)+`</option>`);
 //    	} else {
 //    		selectMonth.append(`<option dropdown-type="month" value="`+Number(i)+`">`+Number(i)+`</option>`);
 //    	}
 //    }
 //    $('#jump-to-date > select').change(function (e) {
	//     if (e.attr('dropdown-type') == 'month') {
	//     	$('.select-months > option[selected]').removeAttr('selected'); e.attr('selected',true);
	//     }
	//     if (e.attr('dropdown-type') == 'year') {
	//     	$('.select-years > option[selected]').removeAttr('selected'); e.attr('selected',true);
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
	// 	if ($('#jump-to-date').is(':visible')) {
	// 		$('#jump-to-date').hide();
	// 	} else {
	// 		$('#jump-to-date').show();
	// 	}
	// });
	tbl.append(calendar_header); // adding header with weekdays.
    for (let i = 0; i < 6; i++) {// calendar
        let row = $(`<div class="calendar__week"></div>`);// creates a calendar week

        for (let j = 1; j <= 7; j++) {//creating individual cells, filing them up with day numbers.
            if (i === 0 && j < firstDay) {
                let cellText = 32 - new Date(year, month-1, 32).getDate()-firstDay+j+1;
                let cell = $(`<div class="calendar__day day" day-of-month="`+previousYear+`_`+Number(previousMonth+1)+`_`+cellText+`"></div>`);
                cell.addClass("calendar__invalid_day");
                cell.append(`<div class="calendar__number">`+cellText+`</div>`);
                row.append(cell);
            }
            else if (date > daysInMonth) {
                let cellText = date%daysInMonth;
            	let cell = $(`<div class="calendar__day day" day-of-month="`+nextYear+`_`+Number(nextMonth+1)+`_`+cellText+`"></div>`);
                cell.addClass("calendar__invalid_day");
                cell.append(`<div class="calendar__number">`+cellText+`</div>`);
                row.append(cell);
                date++;
                // break;
            }
            else {
                let cellText = date;
                let currentId = `id_`+year+`_`+Number(month+1)+`_`+cellText+`_date`;
                let cell = $(`<div id="`+currentId+`" class="calendar__day day" day-of-month="`+year+`_`+Number(month+1)+`_`+cellText+`"></div>`);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.addClass("calendar__current_day");
                    cell.addClass("calendar__selected_day");
                } // color today's date
                var currentCounter = 0;
                names = ["Edvards Adel", "Rosheen Ghassan", "Ayaka Nor", "Vassily Bishal", "Rene Lachtna", "Bistra Ayomide", "Toki Odovacar", 
                "Nuria Zakkai", "Arthur Jabin", "Shaked Reynold", "Olga Bozena", "Irvine Nirmala", "Constant Jarmil", "Vlatka Torvald"]
                nameAbbr = ["EA", "RG", "AN", "VB", "RL", "BA", "TO", "NZ", "AJ", "SR", "OB", "IN", "CJ", "VT"];
                if (j*(i+1)%7!==0 && j%6!==0) { // simulate queries
                    // [:TODO:] pridat citanie z databazy
                    for (var q = 0 ; q < names.length; q++) {
	                    if (Math.floor(Math.random() * 10)%2==0) {
	                        cell.append(`<div `+
	                        	`user-name = "`+names[q]+`" `+
	                        	`user-abbr="`+nameAbbr[q]+`" `+
	                        	`user-id="`+Number(q+1)+`" `+
	                        	`class="calendar__people" style="`+toRGB(names[q])+`"`+
	                        	`>`+nameAbbr[q]+`</div>`);
	                        currentCounter+=1;
	                    }
                    }
                }
                if (currentCounter>10) {
                    cell.addClass("calendar__full_day");
                } else if (currentCounter>6) {
                    cell.addClass("calendar__almost_full_day");
                } else if (currentCounter>0) {
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