self.addEventListener('install',(event)=>{
  console.log('Services is installed')
})

self.addEventListener('activate',(event)=>{
  console.log('Services is activated')
})

self.addEventListener('fetch',(event)=>{
  event.respodWith(fetch(event.request))
})

