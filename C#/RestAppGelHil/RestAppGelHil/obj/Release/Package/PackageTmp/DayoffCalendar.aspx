﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DayoffCalendar.aspx.cs" Inherits="RestAppGelHil.DayoffCalendar" %>



<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title>Barmy's awesome day-off planer</title>
	<link rel="stylesheet" type="text/css" href="./css/calendar_style.css" media="screen"/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
	<script 
		src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" 
		integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" 
		crossorigin="anonymous">
	</script>
	<script
	  src="https://code.jquery.com/jquery-3.4.1.min.js"
	  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	  crossorigin="anonymous">
	</script>
	<script src="https://raw.githubusercontent.com/MrRio/jsPDF/master/src/modules/html.js"></script>
</head>
<body>
	<div class="wrapper">
	  <main>
	    <div id="toolbar__page" class="toolbar page">
	      <div class="toggle">
	        <div class="previous-month-year toggle__option" onclick="previous();">prev</div>
	        <div class="current-month-year toggle__option toggle__option--selected">curr</div>
	        <div class="next-month-year toggle__option"onclick="next();">next</div>
	      </div>
	      <div class="dropdown">
	      	<div id="current-month-year" class="current-month-year dropbtn">June 2016</div>
		      <!-- <div id="jump-to-date" class="dropdown-content">
		      	<input type="text" name="select-months" list="select-months">
		      	<datalist class="select-months" id="select-months">
					<option class="currMonth" value="">--</option>
				</datalist>
				<input type="text" name="select-years" list="select-years">
		      	<datalist class="select-years" id="select-years">
					<option class="currYear" value="">--</option>
				</datalist>
		      	<input type="submit" value="Jump">
		      </div> -->
	      </div>
	      <div class="search-input">
	        <!-- <input type="text" value="Search"> -->
	        <%--<input type="text" value="Search" 
	        	onblur="if (this.value == '') {this.value = 'Search';this.style.color = 'var(--silver-chalice)';} else {this.style.color = 'var(--slate-gray)';}"
 				onfocus="if (this.value == 'Search') {this.value = '';this.style.color = 'var(--slate-gray)';} else {this.style.color = 'var(--slate-gray)';}" />--%>
			<table>
				<tr>
					<td>
						<p>Work hours left in this month:</p>
					</td>
					<td>
						<p id="numOfWorkDaysLeft"> ~</p>
					</td>
					<td>
						<i class="fas fa-calendar-day"></i>
					</td>
				</tr>
				<tr>
					<td>
						<p>Paid leave left in this work year:</p>
					</td>
					<td>
						<p id="numOfHolidayDaysLeft"> ~</p>
					</td>
					<td>
						<i class="far fa-smile"></i>
					</td>
				</tr>
			</table>
	      </div>
	    </div>

	    <div id="calendar__page" class="calendar page visible">
	    </div>
	    <div id="approvals__page" class="page hidden">
	    	asdkasldaslkdaskldjalskjdaslkdjl
	    </div>

		<table id="legend" class="page" style="width: 100%; margin: 2em 0 0 0">
			<tr>
				<th>
					<div style="display: inline-flex;border: 1px solid; width: 1em; height: 1em;" class="calendar__day day calendar__full_day">13</div>
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Shift overstaffed</div>
				</th>
				<th>
					<div style="display: inline-flex;border: 1px solid; width: 1em; height: 1em;" class="calendar__day day calendar__not_full_day">15</div>	
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Shift understaffed</div>
				</th>
				<th>
					<div style="display: inline-flex;border: 1px solid; width: 1em; height: 1em;" class="calendar__day day calendar__almost_full_day">8</div>	
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Shift fully staffed</div>
				</th>
				<th>
					<div style="display: inline-flex;border: 2px solid var(--liberty); width: 1em; height: 1em;" class="calendar__day day calendar__selected_day">27</div>	
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Selected day</div>
				</th>
				<th>
					<div style="display: inline-flex;border:2px solid var(--raspberry-glace); width: 1em; height: 1em;" class="calendar__day day calendar__current_day">20</div>	
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Today</div>
				</th>
			</tr>
		</table>

        <div id="login__page" class="page hidden">
	    	<div id="div_login">
                <h1>Login</h1>
                <div id="message"></div>
                <div>
                    <input type="text" class="textbox" id="txt_uname" name="txt_uname" placeholder="Username" />
                </div>
                <div>
                    <input type="password" class="textbox" id="txt_pwd" name="txt_pwd" placeholder="Password"/>
                </div>
                <div>
                    <input type="button" value="Submit" name="but_submit" id="but_submit" />
                </div>
            </div>
	    </div>

	  </main>
	  <sidebar>
	    <div class="logo">Barmy's awesome day-off planner</div>
	    <div class="avatar">
			<div class="avatar__img">
				<img id="user-avatar" src="https://picsum.photos/70" alt="avatar">
			</div>
			<div id="user-avatar-name"class="avatar__name">Not logged in.</div>
			<div id="export-pdf" style="display:none;">Export PDF</div>
	    </div>
	    <%--<nav class="menu">
	      <!-- <a class="menu__item" href="#">
	        <i class="menu__icon fa fa-home"></i>
	        <span class="menu__text">overview</span>
	      </a>
	      <a class="menu__item" href="#">
	        <i class="menu__icon fa fa-list"></i>
	        <span class="menu__text">workout</span>
	      </a> -->
	      <a class="menu__item" onclick="$('.menu__item').removeClass('menu__item--active');$(this).addClass('menu__item--active');$('.page').removeClass('visible');$('.page').addClass('hidden');$('#approvals__page').removeClass('hidden');$('#approvals__page').addClass('visible');$('#people_list').html('');">
	        <i class="menu__icon fa fa-envelope"></i>
	        <span class="menu__text">approvals</span>
	      </a>
	      <a class="menu__item menu__item--active" onclick="$('.menu__item').removeClass('menu__item--active');$(this).addClass('menu__item--active');$('.page').removeClass('visible');$('.page').addClass('hidden');$('#calendar__page, #toolbar__page, #legend').removeClass('hidden');$('#calendar__page, #toolbar__page, #legend').addClass('visible');$('#people_list').html('');">
	        <i class="menu__icon fa fa-calendar"></i>
	        <span class="menu__text">calendar</span>
	      </a>
	      <!-- <a class="menu__item" href="#">
	        <i class="menu__icon fa fa-bar-chart"></i>
	        <span class="menu__text">goals</span>
	      </a>
	      <a class="menu__item" href="#">
	        <i class="menu__icon fa fa-trophy"></i>
	        <span class="menu__text">achivements</span>
	      </a>
	      <a class="menu__item" href="#">
	        <i class="menu__icon fa fa-sliders"></i>
	        <span class="menu__text">measurements</span>
	      </a> -->
	    </nav>--%>
	    <div class="dashboard">
		    <div id="people_list">
		    	
	    	</div>
		</div>
		<div id="dashboard">
	    	
		</div>
	    <div class="copyright">copyright &copy; 2019</div>
	  </sidebar>
	</div>
	<script src="js/main.js"></script>
</body>
</html>