    // Matrix/Code Rain effect
    const canvas = document.querySelector('.matrix-bg');
    const ctx = canvas.getContext('2d');
    let w, h, cols, drops;
    function resize() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      cols = Math.floor(w / 16);
      drops = Array(cols).fill(1);
    }
    window.addEventListener('resize', resize);
    resize();
    function drawMatrix() {
      ctx.fillStyle = 'rgba(1,11,23,0.08)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '16px monospace';
      for (let i = 0; i < cols; i++) {
        let txt = String.fromCharCode(0x30A0 + Math.random()*96);
        ctx.fillStyle = '#0ff';
        ctx.fillText(txt, i*16, drops[i]*18);
        if (drops[i]*18 > h && Math.random() > 0.975) drops[i]=0;
        drops[i]++;
      }
      requestAnimationFrame(drawMatrix);
    }
    drawMatrix();

    // Section switching logic
    const sections = ["about","education","experience","projects","contact"];
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
      link.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelectorAll('.nav-link[data-section]').forEach(l=>l.classList.remove('selected'));
        this.classList.add('selected');
        const showSection = this.getAttribute('data-section');
        sections.forEach(s => {
          document.getElementById('section-' + s).style.display = (s === showSection) ? '' : 'none';
        });
        // Scroll to top of terminal window after switching
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });

    // EXPERIENCE DATA & FILTERING
    const experiences = [
      // IIITD
      {
        id: "IIITD-4",
        group: "IIITD",
        groupLabel: "IIIT Delhi",
        title: "Teaching Assistant, Computer Architecture",
        company: "IIIT Delhi",
        date: "Nov 2023 – Mar 2024",
        sortDate: "2023-11-01",
        desc: [
          "Conducted lab sessions and assignments in computer architecture for B.Tech students."
        ]
      },
      {
        id: "OTHERS-1",
        group: "OTHERS",
        groupLabel: "Others",
        title: "Artificial Intelligence Intern",
        company: "Constems-AI, Noida",
        date: "Feb 2024 – April 2024",
        sortDate: "2024-02-01",
        desc: [
          "Worked on visual merchandising/display – optimizing retail store presentation with AI.",
          "Developed solutions for product display to highlight features and increase customer engagement."
        ]
      },
      {
        id: "QUALCOMM-1",
        group: "QUALCOMM",
        groupLabel: "Qualcomm",
        title: "Kernel Engineer",
        company: "Qualcomm India Pvt. Ltd.",
        date: "Jul 2024 – Present",
        sortDate: "2024-07-01",
        desc: [
          "Full-time Linux kernel/driver engineer (PCIe, Embedded).",
          "Upstream contributions, debugging, and feature development for device drivers.",
          "Automation and validation for Linux-based embedded platforms."
        ]
      },
      {
        id: "IIITD-1",
        group: "IIITD",
        groupLabel: "IIIT Delhi",
        title: "UG Researcher, Applied Data Science and AI Lab",
        company: "IIIT Delhi",
        date: "Jan 2023 – Dec 2023",
        sortDate: "2023-01-01",
        desc: [
          "Worked with senior researchers on defending ML/DL models from adversarial attacks.",
          "Developed a toolbox for model stealing attacks with GUI."
        ]
      },
      {
        id: "QUALCOMM-2",
        group: "QUALCOMM",
        groupLabel: "Qualcomm",
        title: "Summer Engineering Intern",
        company: "Qualcomm India Pvt. Ltd., Hyderabad",
        date: "May 2023 – July 2023",
        sortDate: "2023-05-01",
        desc: [
          "Developed and deployed a Web App tool (SKynreX) for efficient bug resolution for the USB team.",
          "Built parsers and ML models to provide intelligent bug solutions based on bug codes and titles.",
          "Optimized the bug resolution process, saving engineering hours."
        ]
      },
      {
        id: "IIITD-2",
        group: "IIITD",
        groupLabel: "IIIT Delhi",
        title: "Teaching Assistant, Introduction to Programming",
        company: "IIIT Delhi",
        date: "Nov 2022 – Mar 2023",
        sortDate: "2022-11-01",
        desc: [
          "Assisted in labs, tutorials, and mentoring for undergraduate students."
        ]
      },
      {
        id: "IIITD-3",
        group: "IIITD",
        groupLabel: "IIIT Delhi",
        title: "IFHP Maintainer",
        company: "IIIT Delhi",
        date: "Dec 2020 – July 2022",
        sortDate: "2020-12-01",
        desc: [
          "Maintainer and principal backend developer for IFHP web platform.",
          "Handled deployment, data integration, and security features for federated healthcare tools."
        ]
      },
      {
        id: "IIITD-5",
        group: "IIITD",
        groupLabel: "IIIT Delhi",
        title: "Research Intern, Community-Dataset",
        company: "TAVLAB, IIIT Delhi",
        date: "May 2022 – July 2022",
        sortDate: "2022-05-01",
        desc: [
          "Visualized BioBERT embeddings of ~6000 biomedical dataset abstracts using T-SNE plots.",
          "Integrated datasets into the IFHP live portal for user EDA on large-scale biomedical data."
        ]
      }
    ];
    experiences.sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1));
    const groupOrder = ["IIITD", "QUALCOMM", "OTHERS"];
    const groupLabels = {
      IIITD: "IIIT Delhi",
      QUALCOMM: "Qualcomm",
      OTHERS: "Others"
    };
    function renderExperience(filter) {
      const container = document.getElementById('experience-timelines');
      container.innerHTML = '';
      if (filter === 'all') {
        const timeline = document.createElement('div');
        timeline.className = 'timeline';
        experiences.forEach(exp => {
          timeline.appendChild(createTimelineEntry(exp));
        });
        container.appendChild(timeline);
      } else {
        groupOrder.forEach(group => {
          if (filter !== group) return;
          const groupExps = experiences.filter(exp => exp.group === group);
          if (groupExps.length > 0) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'exp-group';
            const label = document.createElement('div');
            label.className = 'exp-group-label';
            label.innerText = groupLabels[group];
            groupDiv.appendChild(label);
            const timeline = document.createElement('div');
            timeline.className = 'timeline';
            groupExps.forEach(exp => {
              timeline.appendChild(createTimelineEntry(exp));
            });
            groupDiv.appendChild(timeline);
            container.appendChild(groupDiv);
          }
        });
        // Show other groups collapsed but in order
        groupOrder.forEach(group => {
          if (group === filter) return;
          const groupExps = experiences.filter(exp => exp.group === group);
          if (groupExps.length > 0) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'exp-group';
            groupDiv.style.display = 'none';
            groupDiv.setAttribute('data-group', group);
            const label = document.createElement('div');
            label.className = 'exp-group-label';
            label.innerText = groupLabels[group];
            groupDiv.appendChild(label);
            const timeline = document.createElement('div');
            timeline.className = 'timeline';
            groupExps.forEach(exp => {
              timeline.appendChild(createTimelineEntry(exp));
            });
            groupDiv.appendChild(timeline);
            container.appendChild(groupDiv);
          }
        });
      }
    }
    function createTimelineEntry(exp) {
      const entry = document.createElement('div');
      entry.className = 'timeline-entry';
      const title = document.createElement('div');
      title.className = 'timeline-title';
      title.innerText = exp.title;
      const company = document.createElement('div');
      company.className = 'timeline-company';
      company.innerText = exp.company;
      const date = document.createElement('div');
      date.className = 'timeline-date';
      date.innerText = exp.date;
      const desc = document.createElement('div');
      desc.className = 'timeline-desc';
      if (exp.desc && Array.isArray(exp.desc)) {
        const ul = document.createElement('ul');
        exp.desc.forEach(d => {
          const li = document.createElement('li');
          li.innerHTML = d;
          ul.appendChild(li);
        });
        desc.appendChild(ul);
      }
      entry.appendChild(title);
      entry.appendChild(company);
      entry.appendChild(date);
      entry.appendChild(desc);
      return entry;
    }
    document.addEventListener("DOMContentLoaded", function() {
      renderExperience('all');
      document.querySelectorAll('.exp-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.exp-filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          renderExperience(this.getAttribute('data-filter'));
        });
      });
    });