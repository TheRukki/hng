function updateTime() {
        const utcTime = new Date().toISOString();
        document.getElementById("utc-time").innerText = utcTime;
      }
      setInterval(updateTime, 1000);
      updateTime();
