window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    
    document.title = pageTitle
    favicon.href = './assets/images/dp_male.svg'
    
  }
}
