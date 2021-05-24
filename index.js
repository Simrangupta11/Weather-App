const curDate = document.getElementById("date");
        let weathercon= document.getElementById("weathercon");

        const tempStatus = "Clouds";

        const getCurrentDay = () => {
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] =  "Thursday";
            weekday[5] =  "Friday";
            weekday[6] = "Saturday";
            let currentTime = new Date();
          let day =(weekday[currentTime.getDay()]);
          return day;
        };

        const getCurrentTime = () => {
            var months = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "June",
                "July",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ]
            var now=new Date();
            var month = months[now.getMonth() ];
            var date = now.getDate();
      

            let hours = now.getHours();
            let mins = now.getMinutes();

            var session="AM";
    if(hours===0)
    {
        hours=12;
    }
    if(hours>12)
    {
        hours=hours-12;
        session="PM";
    }
    if(hours<10)
    {
        hours="0"+hours;
    }
    if(mins<10)
    {
        mins="0"+mins;
    }
    return `${month}  ${date} | ${hours}:${mins}${session}`;
        };

        curDate.innerHTML=getCurrentDay() + " | "+ getCurrentTime();
