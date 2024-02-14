-- Let's prepare a report showing how many members of each team live in each region of the country.

SELECT 
    s.region, 
    p.team, 
    COUNT(p.team) AS team_count
FROM 
    states AS s
INNER JOIN 
    people AS p 
ON 
    s.state_abbrev = p.state_code
GROUP BY 
    s.region, 
    p.team;