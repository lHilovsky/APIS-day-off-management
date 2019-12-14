
SELECT DISTINCT
		e.ID, 
		(
			SELECT count(eS.ID) from employees eS
			JOIN EmployeeShiftsRelations esS ON eS.ID = esS.employee_ID 
			JOIN shifts sS ON esS.shifts_ID = sS.ID 
			WHERE eS.ID = e.ID
			AND YEAR(sS.work_date) = 2019 
			AND MONTH(sS.work_date) = 12
			AND DATENAME(weekday, sS.work_date) IN ('Saturday', 'Sunday')
		)
		AS email, 
		e.date_of_hire, 
		e.name, 
		e.surname, 
		e.gender, 
		e.date_of_birth 
FROM employees e
ORDER BY email DESC