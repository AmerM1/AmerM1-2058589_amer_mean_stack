const deleteClass = async () => {
    const id = document.querySelector('input[name="_id"]').value
    await fetch(`/api/class/deleteClasses/${id}`, {
        method: 'DELETE',
      });
      alert("delted successfully")
      window.location.href="/fetchClass.html"
    }