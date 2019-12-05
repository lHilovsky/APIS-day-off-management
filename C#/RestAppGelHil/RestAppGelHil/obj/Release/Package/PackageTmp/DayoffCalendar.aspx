<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="DayoffCalendar.aspx.cs" Inherits="RestAppGelHil.DayoffCalendar" %>



<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
	<title>Hilo's awesome day-off planer</title>
	<link rel="stylesheet" type="text/css" href="./css/calendar_style.css" media="screen"/>
	<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
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
	        <input type="text" value="Search" 
	        	onblur="if (this.value == '') {this.value = 'Search';this.style.color = 'var(--silver-chalice)';} else {this.style.color = 'var(--slate-gray)';}"
 				onfocus="if (this.value == 'Search') {this.value = '';this.style.color = 'var(--slate-gray)';} else {this.style.color = 'var(--slate-gray)';}" />
	        <i class="fa fa-search"></i>
	      </div>
	    </div>

	    <div id="calendar__page" class="calendar page visible">
	    </div>
	    <div id="approvals__page" class="page hidden">
	    	asdkasldaslkdaskldjalskjdaslkdjl
	    </div>
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
	    
	    <table id="legend" class="page" style="width: 100%; margin: 2em 0 0 0">
			<tr>
				<th>
					<div style="display: inline-flex;border: 1px solid; width: 1em; height: 1em;" class="calendar__day day calendar__full_day">13</div>
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Shift full</div>
				</th>
				<th>
					<div style="display: inline-flex;border: 1px solid; width: 1em; height: 1em;" class="calendar__day day calendar__not_full_day">15</div>	
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Shift not full</div>
				</th>
				<th>
					<div style="display: inline-flex;border: 1px solid; width: 1em; height: 1em;" class="calendar__day day calendar__almost_full_day">8</div>	
				</th>
				<th>
					<div style="display: inline-flex;border:none; width:10em;" class="calendar__day day" >Shift almost full</div>
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

	  </main>
	  <sidebar>
	    <div class="logo">Hilo's awesome day-off planner</div>
	    <div class="avatar">
	      <div class="avatar__img">
	        <img src="https://picsum.photos/70" alt="avatar">
	      </div>
	      <div class="avatar__name">Name Surname</div>
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