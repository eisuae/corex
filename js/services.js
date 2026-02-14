const serviceDetails = {
    "cctv": {
        title: "CCTV Surveillance Systems",
        image: "images/cctv.jpg",
        description: "We provide comprehensive CCTV surveillance solutions tailored to your security needs. Our systems include high-resolution cameras, DVR/NVR recording systems, remote monitoring capabilities, and mobile access.",
        features: [
            "High-resolution cameras (4K, 8MP)",
            "Remote monitoring via mobile apps",
            "Night vision and motion detection",
            "Cloud storage options",
            "Professional installation and configuration"
        ]
    },
    "gate-barrier": {
        title: "Gate Barrier Systems",
        image: "images/gate-barrier.jpg",
        description: "Our automatic gate barrier systems provide secure access control for parking areas, commercial premises, and residential complexes.",
        features: [
            "Automatic rising arm barriers",
            "RFID and remote control access",
            "Integration with ANPR systems",
            "Safety features with sensors",
            "Weather-resistant construction"
        ]
    },
    "biometric": {
        title: "Biometric Access Control",
        image: "images/biometric.jpg",
        description: "Advanced biometric access control systems using fingerprint, facial recognition, iris scanning, or palm vein technology.",
        features: [
            "Fingerprint, facial, or iris recognition",
            "Multi-factor authentication",
            "Integration with time attendance",
            "Anti-spoofing technology",
            "Centralized management software"
        ]
    },
    "anpr": {
        title: "ANPR Systems",
        image: "images/anpr.jpg",
        description: "Automatic Number Plate Recognition systems for vehicle tracking, parking management, and access control.",
        features: [
            "High-speed license plate recognition",
            "Integration with barrier systems",
            "Blacklist/whitelist management",
            "Cloud-based monitoring",
            "Real-time alerts"
        ]
    },
    "driver-id": {
        title: "Driver Identification Systems",
        image: "images/driver-id.jpg",
        description: "Specialized driver identification systems for transportation companies, logistics centers, and secure facilities.",
        features: [
            "Driver verification technology",
            "Integration with fleet management",
            "Tamper-proof identification",
            "Real-time tracking",
            "Comprehensive reporting"
        ]
    },
    "under-vehicle": {
        title: "Under Vehicle Scanner",
        image: "images/under-vehicle.jpg",
        description: "High-tech under vehicle scanning systems that provide a complete image of the underside of vehicles to detect hidden threats.",
        features: [
            "High-resolution imaging",
            "Automatic scanning as vehicle passes",
            "Image storage and retrieval",
            "Remote monitoring capability",
            "Integration with security systems"
        ]
    },
    "computer-service": {
        title: "Computer & Laptop Services",
        image: "images/computer-service.jpg",
        description: "Comprehensive computer and laptop services including hardware repair, software installation, virus removal, data recovery, and maintenance.",
        features: [
            "Hardware diagnostics and repair",
            "Virus and malware removal",
            "Data backup and recovery",
            "Operating system installation",
            "Hardware upgrades"
        ]
    },
    "printer-service": {
        title: "Printer Services",
        image: "images/printer-service.jpg",
        description: "Professional printer services including installation, maintenance, repair, and supplies for all types of printers.",
        features: [
            "Installation and setup",
            "Regular maintenance",
            "Cartridge replacement",
            "Network configuration",
            "On-site repair services"
        ]
    },
    "router-switch": {
        title: "Routers, Switches & Firewalls",
        image: "images/router-switch.jpg",
        description: "Enterprise-grade networking solutions including routers, switches, and firewalls for secure and reliable connectivity.",
        features: [
            "Network design and implementation",
            "Firewall configuration and management",
            "VLAN setup and segmentation",
            "Wireless network integration",
            "24/7 network monitoring"
        ]
    },
    "nas-storage": {
        title: "NAS Storage Solutions",
        image: "images/nas-storage.jpg",
        description: "Network Attached Storage solutions for centralized data management, backup, and sharing.",
        features: [
            "Multi-bay RAID configurations",
            "Remote access capabilities",
            "Automatic backup scheduling",
            "File sharing and collaboration",
            "Cloud synchronization"
        ]
    },
    "pbx": {
        title: "PBX Systems",
        image: "images/pbx.jpg",
        description: "Private Branch Exchange systems for efficient business communication. We install and configure both traditional and VoIP PBX systems.",
        features: [
            "VoIP and traditional PBX",
            "Auto-attendant setup",
            "Call routing and forwarding",
            "Conference calling",
            "Integration with CRM systems"
        ]
    },
    "public-address": {
        title: "Public Address Systems",
        image: "images/public-address.jpg",
        description: "Professional audio systems for clear announcements, background music, and emergency notifications in commercial buildings.",
        features: [
            "Zone-based audio distribution",
            "Emergency evacuation systems",
            "Background music integration",
            "Digital signal processing",
            "Remote paging capabilities"
        ]
    },
    "live-streaming": {
        title: "Live Streaming Setup",
        image: "images/live-streaming.jpg",
        description: "Complete live streaming solutions for events, conferences, webinars, and broadcasts.",
        features: [
            "Multi-camera setups",
            "Professional audio mixing",
            "Stream encoding and distribution",
            "Graphics and overlays",
            "Recording and archiving"
        ]
    },
    "cat6-cabling": {
        title: "Cat6 Cabling",
        image: "images/cat6-cabling.jpg",
        description: "Professional installation of Category 6 network cabling for high-speed data transmission up to 10 Gbps.",
        features: [
            "10 Gbps data transmission",
            "Professional cable management",
            "Certification and testing",
            "Future-proof infrastructure",
            "Compliant with industry standards"
        ]
    },
    "fiber-cabling": {
        title: "Fiber Optic Cabling",
        image: "images/fiber-cabling.jpg",
        description: "Installation of single-mode and multimode fiber optic cables for high-bandwidth, long-distance data transmission.",
        features: [
            "Single-mode and multimode fiber",
            "Long-distance transmission",
            "High bandwidth capacity",
            "Immunity to EMI/RFI",
            "Future-proof scalability"
        ]
    },
    "fiber-splicing": {
        title: "Fiber Splicing",
        image: "images/fiber-splicing.jpg",
        description: "Precision fiber optic splicing and termination services using fusion splicing technology.",
        features: [
            "Fusion splicing technology",
            "Low insertion loss",
            "OTDR testing and certification",
            "Patch panel installation",
            "Fiber enclosures and management"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const serviceModal = document.getElementById('serviceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const closeModal = document.getElementById('closeModal');

    // Open modal on "View Details" click
    document.querySelectorAll('.view-details').forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const serviceId = this.getAttribute('data-service');
            if (serviceId && serviceDetails[serviceId]) {
                const service = serviceDetails[serviceId];
                modalTitle.textContent = service.title;
                modalImage.src = service.image;
                modalImage.alt = service.title;
                modalDescription.textContent = service.description;
                modalFeatures.innerHTML = '';
                service.features.forEach(feature => {
                    const featureElement = document.createElement('div');
                    featureElement.className = 'modal-feature';
                    featureElement.innerHTML = `<i class="fas fa-check-circle"></i><span>${feature}</span>`;
                    modalFeatures.appendChild(featureElement);
                });
                serviceModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            } else {
                console.warn(`Service ID "${serviceId}" not found.`);
            }
        });
    });

    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            serviceModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close modal when clicking outside
    if (serviceModal) {
        serviceModal.addEventListener('click', function(e) {
            if (e.target === serviceModal) {
                serviceModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});