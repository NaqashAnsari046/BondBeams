import React from 'react'

const ShortDateTime = () => {

    let ans = item.date_joined;
        ans = ans.split("T")[0];
        let get = ans.split("-")[1];
        function getMonthName(get) {
          const date = new Date();
          date.setMonth(get - 1);

          return date.toLocaleString("en-US", { month: "short" });
        }
        var getdate =
          ans.split("-")[0] + "-" + getMonthName(get) + "-" + ans.split("-")[2];

          
  return (
    <div>ShortDateTime</div>
  )
}

export default ShortDateTime