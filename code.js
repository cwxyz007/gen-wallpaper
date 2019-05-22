import { time } from 'universal'
import { Man } from 'Earth'
const me = new Man()

while (time && me.alive()) {
  const now = new Date()
  if (!now.isWorkday()) me.play()
  switch (now) {
    case '09:00 AM': me.work();  break
    case '12:00 AM': me.eat();   break
    case '01:30 PM': me.work();  break
    case '06:00 PM': me.play();  break
    default:         me.sleep(); break
  }
}
