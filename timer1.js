const timer1 = function(alarms) {
  if (alarms.length === 0) {
    return;
  }

  for (const alarm of alarms) {
    let alarmInt = Number(alarm);

    if (alarmInt < 0 || !Number.isInteger) {
      continue;
    }

    setTimeout(() => {
      console.log(`Your ${alarmInt} second alarm `);
    }, alarmInt * 1000);
  }

};


timer1(process.argv.slice(2));
