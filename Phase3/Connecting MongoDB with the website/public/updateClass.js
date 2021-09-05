
const getFormData = () => {
    const formData = {}
    document.querySelectorAll('input')
        .forEach(ip => {
            formData[ip.name] = ip.value
        })
    return formData
}

const saveClass = async () => {
    await fetch('/api/class/updateClasses', {
        method: 'PUT',
        body: JSON.stringify(getFormData()),
        headers: {
            'Content-Type': 'application/json'
          },
      });
      alert("updated successfully")
      window.location.href="/fetchClass.html"
}



const resetForm = () => {
    document.querySelectorAll('input').forEach(ip => ip.value = '')
}