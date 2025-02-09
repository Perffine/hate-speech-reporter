// Mock login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginBtn').classList.add('hidden');
    document.getElementById('userInfo').classList.remove('hidden');
    document.getElementById('submissionForm').classList.remove('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
});

function logout() {
    document.getElementById('loginBtn').classList.remove('hidden');
    document.getElementById('userInfo').classList.add('hidden');
    document.getElementById('submissionForm').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

// Content type selection
function setContentType(type) {
    // Hide all input sections first
    ['linkInput', 'textInput', 'screenshotInput'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    // Show the selected input section
    document.getElementById(type + 'Input').classList.remove('hidden');
}

// Form submission
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Hide form and show analysis status
    document.getElementById('submissionForm').classList.add('hidden');
    document.getElementById('analysisStatus').classList.remove('hidden');
    
    // Simulate analysis completion after 3 seconds
    setTimeout(function() {
        document.getElementById('analysisStatus').classList.add('hidden');
        document.getElementById('submissionForm').classList.remove('hidden');
        alert('Analysis complete! Check the dashboard for results.');
    }, 3000);
});