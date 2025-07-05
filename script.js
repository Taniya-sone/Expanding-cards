 <script>
        document.querySelectorAll('.panel').forEach(panel = {
            panel.addEventListener('click', () => {
                document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
                panel.classList.add('active');
            })
        });
 </script>

