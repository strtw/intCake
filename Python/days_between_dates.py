###
### Define a simple nextDay procedure, that assumes
### every month has 30 days.
###
### For example:
###    nextDay(1999, 12, 30) => (2000, 1, 1)
###    nextDay(2013, 1, 30) => (2013, 2, 1)
###    nextDay(2012, 12, 30) => (2013, 1, 1)  (even though December really has 31 days)

def nextDay(year, month, day):
    
   # Returns the year, month, day of the next day.
   # Simple version: assume every month has 30 days.

    # YOUR CODE HERE
    if day + 1 > 30:
        day = 1
        month = month + 1
    else:
        day = day + 1
    if month > 12:
        month = 1
        year = year + 1
    return year,month,day


nextDay(1999, 12, 30)
nextDay(2013, 1, 30)
nextDay(2012, 12, 30)