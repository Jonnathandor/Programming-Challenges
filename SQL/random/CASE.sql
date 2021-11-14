SELECT 
    first_name,
    IFNULL(AVG(grade), 0) AS 'Average',
    CASE
        WHEN
            AVG(grade) IS NULL 
        THEN
            'Failing'
        WHEN 
            AVG(grade) >= 75 
        THEN 
            'Passing'
        ELSE
            'Failing'
    END AS 'Passing_Status'
FROM students
    LEFT JOIN papers
        ON students.id = papers.student_id
GROUP BY students.id
ORDER BY average DESC; 