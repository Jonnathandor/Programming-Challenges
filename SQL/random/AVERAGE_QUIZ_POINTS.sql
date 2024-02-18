-- SQL Query to report the average and maximum quiz scores by state
SELECT
    s.state_name AS STATE,
    MAX(p.quiz_points) AS MAXPOINTS,
    AVG(p.quiz_points) AS AVGPOINTS
FROM
    states s
INNER JOIN people p ON s.state_abbrev = p.state_code
GROUP BY
    s.state_name
ORDER BY
    AVG(p.quiz_points) DESC;
