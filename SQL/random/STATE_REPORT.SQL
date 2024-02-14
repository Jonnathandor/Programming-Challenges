-- Let's create a report that shows which members of each 
-- team in the state of Colorado (CO) want a shirt or a hat 
-- for participating in our quiz. We'll sort the results in a 
-- way that keeps the data organized: first, we'll sort 
-- the participants by team, in alphabetical order, and 
-- then we'll sort by whether they want a shirt or hat. 
-- This also will be an alphabetical sort. Within each 
-- of these team-apparel combinations, we'll sort the 
-- participants by their last name, in reverse alphabetical order (Z-A).
SELECT 
    p.team, 
    p.shirt_or_hat, 
    p.first_name, 
    p.last_name
FROM 
    people p
JOIN 
    states s ON p.state_code = s.state_abbrev
WHERE 
    s.state_abbrev = 'CO'
ORDER BY 
    p.team ASC, 
    p.shirt_or_hat ASC, 
    p.last_name DESC;