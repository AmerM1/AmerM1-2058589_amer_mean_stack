
const getFormData = () => {
    const formData = {}
    document.querySelectorAll('input')
        .forEach(ip => {
            formData[ip.name] = ip.value
        })
    return formData
}

const saveClass = async () => {
    await fetch('/api/class/storeClasses', {
        method: 'POST',
        body: JSON.stringify(getFormData()),
        headers: {
            'Content-Type': 'application/json'
          },
      });
      alert("saved successfully")
      window.location.href="/fetchClass.html"
}



const resetForm = () => {
    document.querySelectorAll('input').forEach(ip => ip.value = '')
}