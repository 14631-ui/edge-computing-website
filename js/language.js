// Built-in translations for the Edge Computing website.
// English is the default. The selected language is shared across pages and JSFiddles.
(function () {
  const languages = {
    en: "English",
    fr: "Français",
    es: "Español",
    "zh-CN": "简体中文"
  };

  // Each entry contains French, Spanish, and Simplified Chinese translations.
  const rows = {
    "Language":["Langue","Idioma","语言"],
    "Choose language":["Choisir la langue","Elegir idioma","选择语言"],
    "You scored":["Vous avez obtenu","Obtuviste","你的得分是"],
    "Home":["Accueil","Inicio","首页"],
    "How It Works":["Fonctionnement","Cómo funciona","工作原理"],
    "Applications":["Applications","Aplicaciones","应用"],
    "Knowledge Check":["Vérification des connaissances","Comprueba tus conocimientos","知识测验"],
    "Sources":["Sources","Fuentes","资料来源"],
    "Computing closer to where data is created":["L'informatique au plus près de la création des données","Computación más cerca de donde se crean los datos","让计算更接近数据产生的地方"],
    "Choose colour theme":["Choisir le thème de couleur","Elegir tema de color","选择颜色主题"],
    "Light":["Clair","Claro","浅色"],
    "Dark":["Sombre","Oscuro","深色"],
    "System":["Système","Sistema","跟随系统"],
    "AN EMERGING AREA OF COMPUTER SCIENCE":["UN DOMAINE ÉMERGENT DE L'INFORMATIQUE","UN ÁREA EMERGENTE DE LA INFORMÁTICA","计算机科学的新兴领域"],
    "What if your data didn't have to travel so far?":["Et si vos données n'avaient pas besoin de voyager aussi loin ?","¿Y si tus datos no tuvieran que viajar tan lejos?","如果你的数据不必传输那么远呢？"],
    "Edge computing processes data near the device that creates it instead of sending everything to a distant data centre first.":["L'informatique en périphérie traite les données près de l'appareil qui les crée, au lieu de tout envoyer d'abord vers un centre de données éloigné.","La computación en el borde procesa los datos cerca del dispositivo que los crea, en lugar de enviar todo primero a un centro de datos distante.","边缘计算在产生数据的设备附近处理数据，而不是先将所有数据发送到远程数据中心。"],
    "Explore how it works":["Découvrir son fonctionnement","Explorar cómo funciona","了解其工作原理"],
    "What is edge computing?":["Qu'est-ce que l'informatique en périphérie ?","¿Qué es la computación en el borde?","什么是边缘计算？"],
    "Edge computing is a way of organizing computer systems so that some data processing happens close to the source of the data. The \"edge\" can be a device, a local server, or another nearby computer.":["L'informatique en périphérie organise les systèmes informatiques de façon à traiter certaines données près de leur source. La « périphérie » peut être un appareil, un serveur local ou un autre ordinateur à proximité.","La computación en el borde organiza los sistemas informáticos para que parte del procesamiento de datos ocurra cerca de su origen. El «borde» puede ser un dispositivo, un servidor local u otro equipo cercano.","边缘计算是一种组织计算机系统的方式，使部分数据处理在数据源附近进行。“边缘”可以是设备、本地服务器或附近的其他计算机。"],
    "Instead of sending every piece of information to a far-away cloud server, a system can analyze some information locally and send only what is needed.":["Au lieu d'envoyer chaque information à un serveur infonuagique éloigné, un système peut analyser certaines données localement et n'envoyer que ce qui est nécessaire.","En lugar de enviar toda la información a un servidor en la nube lejano, un sistema puede analizar parte de ella localmente y enviar solo lo necesario.","系统可以在本地分析部分信息，只发送必要内容，而不必将所有信息发送到远程云服务器。"],
    "Simple example:":["Exemple simple :","Ejemplo sencillo:","简单示例："],
    "A security camera can detect movement nearby and send an alert immediately. It may not need to upload every second of video to a distant server before making that decision.":["Une caméra de sécurité peut détecter un mouvement à proximité et envoyer immédiatement une alerte. Elle n'a pas forcément besoin de téléverser chaque seconde de vidéo vers un serveur distant avant de prendre cette décision.","Una cámara de seguridad puede detectar movimiento cerca y enviar una alerta de inmediato. Es posible que no necesite subir cada segundo de vídeo a un servidor distante antes de tomar esa decisión.","安全摄像头可以检测附近的移动并立即发送警报。它可能不需要先将每一秒的视频上传到远程服务器再作出判断。"],
    "Why does it matter?":["Pourquoi est-ce important ?","¿Por qué es importante?","为什么这很重要？"],
    "Faster responses":["Réponses plus rapides","Respuestas más rápidas","更快响应"],
    "Processing nearby can reduce the time data spends travelling across a network.":["Le traitement à proximité peut réduire le temps que les données passent à circuler sur un réseau.","El procesamiento cercano puede reducir el tiempo que los datos pasan viajando por una red.","在附近处理可以减少数据在网络中传输所花费的时间。"],
    "Less network traffic":["Moins de trafic réseau","Menos tráfico de red","减少网络流量"],
    "Devices can filter or summarize information before sending it elsewhere.":["Les appareils peuvent filtrer ou résumer les informations avant de les envoyer ailleurs.","Los dispositivos pueden filtrar o resumir la información antes de enviarla a otro lugar.","设备可以先筛选或汇总信息，再将其发送到其他位置。"],
    "Local operation":["Fonctionnement local","Funcionamiento local","本地运行"],
    "Some tasks can continue locally even if the connection to a central cloud service is temporarily unavailable.":["Certaines tâches peuvent continuer localement même si la connexion à un service infonuagique central est temporairement indisponible.","Algunas tareas pueden continuar localmente aunque la conexión a un servicio central en la nube no esté disponible temporalmente.","即使暂时无法连接中央云服务，某些任务仍可在本地继续运行。"],
    "Edge and cloud work together":["L'informatique en périphérie et le nuage travaillent ensemble","El borde y la nube trabajan juntos","边缘计算与云计算协同工作"],
    "Edge computing does not replace cloud computing. A system can use edge devices for quick, local decisions and cloud services for long-term storage and larger-scale analysis.":["L'informatique en périphérie ne remplace pas l'informatique en nuage. Un système peut utiliser des appareils périphériques pour prendre rapidement des décisions locales et des services infonuagiques pour le stockage à long terme et l'analyse à grande échelle.","La computación en el borde no reemplaza a la computación en la nube. Un sistema puede usar dispositivos de borde para decisiones locales rápidas y servicios en la nube para almacenamiento a largo plazo y análisis a mayor escala.","边缘计算并不会取代云计算。系统可以使用边缘设备进行快速的本地决策，并使用云服务进行长期存储和大规模分析。"],
    "See real-world applications →":["Voir des applications concrètes →","Ver aplicaciones del mundo real →","查看实际应用 →"],
    "Mobile view":["Vue mobile","Vista móvil","移动视图"],
    "Desktop view":["Vue ordinateur","Vista de escritorio","桌面视图"],
    "Created for an introductory computer science project":["Créé dans le cadre d'un projet d'introduction à l'informatique","Creado para un proyecto introductorio de informática","为计算机科学入门项目制作"],
    "Back to top":["Retour en haut","Volver arriba","返回顶部"],
    "THE PROCESS":["LE PROCESSUS","EL PROCESO","处理过程"],
    "How edge computing works":["Comment fonctionne l'informatique en périphérie","Cómo funciona la computación en el borde","边缘计算如何工作"],
    "The main idea is to move some computing tasks closer to the devices and people that need the results.":["L'idée principale consiste à rapprocher certaines tâches informatiques des appareils et des personnes qui ont besoin des résultats.","La idea principal es acercar algunas tareas informáticas a los dispositivos y las personas que necesitan los resultados.","核心思想是将部分计算任务移至更接近需要结果的设备和人员的位置。"],
    "A three-step process":["Un processus en trois étapes","Un proceso de tres pasos","三个步骤"],
    "Data is created.":["Les données sont créées.","Se crean los datos.","生成数据。"],
    "A sensor, camera, phone, or machine collects information from its surroundings.":["Un capteur, une caméra, un téléphone ou une machine recueille des informations de son environnement.","Un sensor, una cámara, un teléfono o una máquina recopila información de su entorno.","传感器、摄像头、手机或机器从周围环境收集信息。"],
    "Nearby processing takes place.":["Le traitement à proximité a lieu.","Se realiza el procesamiento cercano.","在附近进行处理。"],
    "An edge device or local server analyzes the information and can make a quick decision.":["Un appareil périphérique ou un serveur local analyse les informations et peut prendre rapidement une décision.","Un dispositivo de borde o servidor local analiza la información y puede tomar una decisión rápida.","边缘设备或本地服务器分析信息并可快速作出决定。"],
    "Selected information is shared.":["Les informations sélectionnées sont partagées.","Se comparte la información seleccionada.","共享选定的信息。"],
    "Useful results can be sent to cloud servers for storage, reporting, or more complex analysis.":["Les résultats utiles peuvent être envoyés à des serveurs infonuagiques pour le stockage, les rapports ou des analyses plus complexes.","Los resultados útiles pueden enviarse a servidores en la nube para almacenarlos, elaborar informes o realizar análisis más complejos.","有用的结果可以发送到云服务器，用于存储、报告或更复杂的分析。"],
    "Watch: What Is Edge Computing?":["Regarder : Qu'est-ce que l'informatique en périphérie ?","Ver: ¿Qué es la computación en el borde?","观看：什么是边缘计算？"],
    "This video from IBM Technology explains the basic concepts of edge computing and how it is used in real-world situations.":["Cette vidéo d'IBM Technology explique les concepts de base de l'informatique en périphérie et son utilisation dans des situations réelles.","Este vídeo de IBM Technology explica los conceptos básicos de la computación en el borde y cómo se utiliza en situaciones reales.","这段 IBM Technology 视频介绍了边缘计算的基本概念及其在现实场景中的应用。"],
    "Play video":["Lire la vidéo","Reproducir vídeo","播放视频"],
    "Edge computing compared with cloud computing":["Comparaison entre l'informatique en périphérie et l'informatique en nuage","Comparación entre la computación en el borde y en la nube","边缘计算与云计算的比较"],
    "Feature":["Caractéristique","Característica","特点"],
    "Edge computing":["Informatique en périphérie","Computación en el borde","边缘计算"],
    "Cloud computing":["Informatique en nuage","Computación en la nube","云计算"],
    "Where processing happens":["Lieu du traitement","Dónde se procesa","处理位置"],
    "Near the data source":["Près de la source des données","Cerca del origen de los datos","靠近数据源"],
    "In remote data centres":["Dans des centres de données distants","En centros de datos remotos","在远程数据中心"],
    "Typical strength":["Atout typique","Ventaja habitual","典型优势"],
    "Quick local responses":["Réponses locales rapides","Respuestas locales rápidas","快速本地响应"],
    "Large-scale storage and computing":["Stockage et calcul à grande échelle","Almacenamiento y computación a gran escala","大规模存储和计算"],
    "Network use":["Utilisation du réseau","Uso de la red","网络使用"],
    "Can reduce data sent elsewhere":["Peut réduire les données envoyées ailleurs","Puede reducir los datos enviados a otros lugares","可减少发送到其他位置的数据"],
    "Often relies on network connections":["Dépend souvent des connexions réseau","A menudo depende de conexiones de red","通常依赖网络连接"],
    "Best use":["Meilleure utilisation","Mejor uso","最适合的用途"],
    "Time-sensitive local tasks":["Tâches locales sensibles au temps","Tareas locales sensibles al tiempo","对时间敏感的本地任务"],
    "Centralized analysis and coordination":["Analyse et coordination centralisées","Análisis y coordinación centralizados","集中式分析与协调"],
    "These approaches are often combined. The best choice depends on the task, network, cost, privacy, and reliability requirements.":["Ces approches sont souvent combinées. Le meilleur choix dépend de la tâche, du réseau, du coût, de la confidentialité et des exigences de fiabilité.","Estos enfoques suelen combinarse. La mejor opción depende de la tarea, la red, el coste, la privacidad y los requisitos de fiabilidad.","这些方法通常结合使用。最佳选择取决于任务、网络、成本、隐私和可靠性要求。"],
    "Benefits and challenges":["Avantages et défis","Beneficios y desafíos","优势与挑战"],
    "Potential benefits":["Avantages potentiels","Beneficios potenciales","潜在优势"],
    "Challenges to manage":["Défis à gérer","Desafíos que deben gestionarse","需要应对的挑战"],
    "Lower delay for some decisions":["Délai réduit pour certaines décisions","Menor demora en algunas decisiones","缩短某些决策的延迟"],
    "Less data sent over the network":["Moins de données envoyées sur le réseau","Menos datos enviados por la red","通过网络发送的数据更少"],
    "Local processing during some connection interruptions":["Traitement local pendant certaines interruptions de connexion","Procesamiento local durante algunas interrupciones de conexión","在某些连接中断期间进行本地处理"],
    "More control over where certain data is processed":["Meilleur contrôle de l'endroit où certaines données sont traitées","Mayor control sobre dónde se procesan ciertos datos","更好地控制某些数据的处理位置"],
    "More devices and locations to maintain":["Davantage d'appareils et de lieux à entretenir","Más dispositivos y ubicaciones que mantener","需要维护更多设备和地点"],
    "Security updates across multiple devices":["Mises à jour de sécurité sur plusieurs appareils","Actualizaciones de seguridad en varios dispositivos","多个设备的安全更新"],
    "Local hardware may have limited power and storage":["Le matériel local peut avoir une puissance et un stockage limités","El hardware local puede tener potencia y almacenamiento limitados","本地硬件的算力和存储空间可能有限"],
    "Systems need to coordinate edge and cloud services":["Les systèmes doivent coordonner les services périphériques et infonuagiques","Los sistemas deben coordinar los servicios de borde y de nube","系统需要协调边缘和云服务"],
    "WHERE IT IS USED":["OÙ C'EST UTILISÉ","DÓNDE SE UTILIZA","应用场景"],
    "Edge computing in everyday life":["L'informatique en périphérie au quotidien","La computación en el borde en la vida cotidiana","日常生活中的边缘计算"],
    "Many systems use nearby processing when a quick response, local operation, or reduced network traffic is useful.":["De nombreux systèmes utilisent le traitement à proximité lorsqu'une réponse rapide, un fonctionnement local ou une réduction du trafic réseau est utile.","Muchos sistemas utilizan procesamiento cercano cuando resulta útil responder rápidamente, operar localmente o reducir el tráfico de red.","当快速响应、本地运行或减少网络流量有帮助时，许多系统会采用附近处理。"],
    "TRANSPORTATION":["TRANSPORT","TRANSPORTE","交通运输"],
    "MANUFACTURING":["FABRICATION","FABRICACIÓN","制造业"],
    "HEALTH AND SMART BUILDINGS":["SANTÉ ET BÂTIMENTS INTELLIGENTS","SALUD Y EDIFICIOS INTELIGENTES","医疗与智能建筑"],
    "Connected vehicles":["Véhicules connectés","Vehículos conectados","联网车辆"],
    "Smart factories":["Usines intelligentes","Fábricas inteligentes","智能工厂"],
    "Monitoring systems":["Systèmes de surveillance","Sistemas de monitorización","监测系统"],
    "A vehicle can process information from cameras and sensors locally to support driver-assistance features. Time-sensitive information may need to be handled quickly rather than waiting for a distant server.":["Un véhicule peut traiter localement les informations provenant de caméras et de capteurs pour soutenir les fonctions d'aide à la conduite. Les informations urgentes doivent parfois être traitées rapidement plutôt que d'attendre un serveur distant.","Un vehículo puede procesar localmente la información de cámaras y sensores para ayudar a las funciones de asistencia al conductor. La información urgente puede necesitar un procesamiento rápido en lugar de esperar a un servidor distante.","车辆可以在本地处理来自摄像头和传感器的信息，以支持驾驶辅助功能。对时间敏感的信息可能需要快速处理，而不是等待远程服务器。"],
    "Machines can monitor temperature, vibration, or production conditions. Nearby computers can flag unusual readings so workers can investigate equipment.":["Les machines peuvent surveiller la température, les vibrations ou les conditions de production. Les ordinateurs à proximité peuvent signaler les valeurs inhabituelles afin que les travailleurs vérifient l'équipement.","Las máquinas pueden supervisar la temperatura, las vibraciones o las condiciones de producción. Los equipos cercanos pueden señalar lecturas inusuales para que los trabajadores revisen los equipos.","机器可以监测温度、振动或生产状况。附近的计算机可以标记异常读数，以便工作人员检查设备。"],
    "Connected sensors can process readings close to where they are collected. System designers must also consider privacy, accuracy, security, and human oversight.":["Les capteurs connectés peuvent traiter les mesures près de leur lieu de collecte. Les concepteurs doivent également tenir compte de la confidentialité, de la précision, de la sécurité et de la supervision humaine.","Los sensores conectados pueden procesar las lecturas cerca de donde se recopilan. Los diseñadores también deben considerar la privacidad, la precisión, la seguridad y la supervisión humana.","联网传感器可以在数据采集地点附近处理读数。系统设计人员还必须考虑隐私、准确性、安全性和人工监督。"],
    "Important consideration":["Point important","Consideración importante","重要注意事项"],
    "Edge computing is not automatically safer, cheaper, or faster in every situation. Results depend on how the system is designed. Devices still need secure configuration, software updates, access controls, and reliable maintenance.":["L'informatique en périphérie n'est pas automatiquement plus sûre, moins coûteuse ou plus rapide dans toutes les situations. Les résultats dépendent de la conception du système. Les appareils nécessitent toujours une configuration sécurisée, des mises à jour logicielles, des contrôles d'accès et une maintenance fiable.","La computación en el borde no es automáticamente más segura, barata o rápida en todas las situaciones. Los resultados dependen del diseño del sistema. Los dispositivos siguen necesitando una configuración segura, actualizaciones de software, controles de acceso y mantenimiento fiable.","边缘计算并非在所有情况下都自动更安全、更便宜或更快。结果取决于系统设计。设备仍需要安全配置、软件更新、访问控制和可靠维护。"],
    "TEST YOUR UNDERSTANDING":["VÉRIFIEZ VOTRE COMPRÉHENSION","COMPRUEBA LO QUE SABES","测试你的理解"],
    "Knowledge check":["Vérification des connaissances","Prueba de conocimientos","知识测验"],
    "Answer all three questions, then check your score. You can reset the quiz and try again.":["Répondez aux trois questions, puis vérifiez votre score. Vous pouvez réinitialiser le questionnaire et réessayer.","Responde las tres preguntas y luego comprueba tu puntuación. Puedes reiniciar el cuestionario e intentarlo de nuevo.","回答全部三个问题，然后查看分数。你可以重置测验并重新尝试。"],
    "Where does edge computing process data?":["Où l'informatique en périphérie traite-t-elle les données ?","¿Dónde procesa los datos la computación en el borde?","边缘计算在哪里处理数据？"],
    "Only in a distant data centre":["Uniquement dans un centre de données distant","Solo en un centro de datos distante","仅在远程数据中心"],
    "Near the device or data source":["Près de l'appareil ou de la source des données","Cerca del dispositivo o del origen de los datos","靠近设备或数据源"],
    "Data is never processed":["Les données ne sont jamais traitées","Los datos nunca se procesan","数据从不被处理"],
    "Which is a possible benefit of edge computing?":["Quel est un avantage possible de l'informatique en périphérie ?","¿Cuál es un posible beneficio de la computación en el borde?","边缘计算可能带来什么好处？"],
    "It always removes every delay":["Elle élimine toujours tous les délais","Siempre elimina todos los retrasos","它总能消除所有延迟"],
    "It can reduce delay for local tasks":["Elle peut réduire le délai des tâches locales","Puede reducir el retraso en tareas locales","它可以减少本地任务的延迟"],
    "It means networks are no longer needed":["Cela signifie que les réseaux ne sont plus nécessaires","Significa que ya no se necesitan redes","这意味着不再需要网络"],
    "How can edge and cloud computing work together?":["Comment l'informatique en périphérie et en nuage peuvent-elles fonctionner ensemble ?","¿Cómo pueden trabajar juntas la computación en el borde y en la nube?","边缘计算和云计算如何协同工作？"],
    "They cannot be used together":["Elles ne peuvent pas être utilisées ensemble","No se pueden utilizar juntas","它们不能一起使用"],
    "Edge handles local tasks; cloud can store and analyze data":["La périphérie gère les tâches locales ; le nuage peut stocker et analyser les données","El borde gestiona las tareas locales; la nube puede almacenar y analizar datos","边缘处理本地任务；云端可以存储和分析数据"],
    "They are exactly the same thing":["Elles sont exactement identiques","Son exactamente lo mismo","它们完全相同"],
    "Check my answers":["Vérifier mes réponses","Comprobar mis respuestas","检查答案"],
    "Reset quiz":["Réinitialiser le questionnaire","Reiniciar cuestionario","重置测验"],
    "Your score will appear here.":["Votre score apparaîtra ici.","Tu puntuación aparecerá aquí.","你的分数将在此显示。"],
    "Quick visual recap":["Récapitulatif visuel rapide","Resumen visual rápido","快速图示回顾"],
    "This diagram is drawn using the HTML Canvas element and JavaScript.":["Ce schéma est dessiné à l'aide de l'élément HTML Canvas et de JavaScript.","Este diagrama se dibuja utilizando el elemento HTML Canvas y JavaScript.","此图使用 HTML Canvas 元素和 JavaScript 绘制。"],
    "Your browser does not support HTML Canvas.":["Votre navigateur ne prend pas en charge HTML Canvas.","Tu navegador no admite HTML Canvas.","你的浏览器不支持 HTML Canvas。"],
    "Devices":["Appareils","Dispositivos","设备"],
    "Sensors / cameras":["Capteurs / caméras","Sensores / cámaras","传感器 / 摄像头"],
    "Edge":["Périphérie","Borde","边缘"],
    "Local processing":["Traitement local","Procesamiento local","本地处理"],
    "Cloud":["Nuage","Nube","云端"],
    "Storage / analysis":["Stockage / analyse","Almacenamiento / análisis","存储 / 分析"],
    "A simplified edge computing system":["Un système simplifié d'informatique en périphérie","Un sistema simplificado de computación en el borde","简化的边缘计算系统"],
    "Some data is processed near where it is created.":["Certaines données sont traitées près de leur lieu de création.","Algunos datos se procesan cerca de donde se crean.","部分数据在其产生地点附近进行处理。"],
    "RESEARCH AND ATTRIBUTION":["RECHERCHE ET ATTRIBUTION","INVESTIGACIÓN Y ATRIBUCIÓN","研究与出处"],
    "Sources and image credits":["Sources et crédits des images","Fuentes y créditos de imágenes","资料来源与图片致谢"],
    "The explanations on this website are written in original wording and informed by the research sources below.":["Les explications de ce site sont rédigées avec des formulations originales et s'appuient sur les sources de recherche ci-dessous.","Las explicaciones de este sitio están redactadas con palabras originales y se basan en las fuentes de investigación que aparecen a continuación.","本网站的说明采用原创措辞，并参考了以下研究资料。"],
    "Research sources":["Sources de recherche","Fuentes de investigación","研究资料"],
    "IBM — Edge Computing":["IBM — Informatique en périphérie","IBM — Computación en el borde","IBM — 边缘计算"],
    "AWS — Edge Computing":["AWS — Informatique en périphérie","AWS — Computación en el borde","AWS — 边缘计算"],
    "Cloudflare — Edge Computing":["Cloudflare — Informatique en périphérie","Cloudflare — Computación en el borde","Cloudflare — 边缘计算"],
    "YouTube":["YouTube","YouTube","YouTube"],
    "The illustrations used on this website are original SVG diagrams created for this school project. They are not copied from external websites.":["Les illustrations de ce site sont des schémas SVG originaux créés pour ce projet scolaire. Elles ne sont pas copiées de sites externes.","Las ilustraciones de este sitio son diagramas SVG originales creados para este proyecto escolar. No se han copiado de sitios web externos.","本网站使用的插图是为本学校项目创作的原创 SVG 图示，并非复制自外部网站。"],
    "original edge/cloud network diagram.":["schéma original de réseau périphérie/nuage.","diagrama original de red de borde/nube.","原创边缘/云网络图。"],
    "original connected-device illustration.":["illustration originale d'appareils connectés.","ilustración original de dispositivos conectados.","原创联网设备插图。"],
    "original connected-vehicle illustration.":["illustration originale de véhicule connecté.","ilustración original de vehículo conectado.","原创联网车辆插图。"],
    "original factory-sensor illustration.":["illustration originale de capteurs d'usine.","ilustración original de sensores de fábrica.","原创工厂传感器插图。"],
    "The Canvas diagram on the Knowledge Check page is drawn by the project's JavaScript code.":["Le schéma Canvas de la page de vérification des connaissances est dessiné par le code JavaScript du projet.","El diagrama Canvas de la página de prueba de conocimientos se dibuja mediante el código JavaScript del proyecto.","知识测验页面上的 Canvas 图示由项目的 JavaScript 代码绘制。"],
    "This website is an educational introduction. It simplifies some technical details so the topic can be explained clearly at an introductory high-school level.":["Ce site est une introduction pédagogique. Certains détails techniques sont simplifiés afin d'expliquer clairement le sujet au niveau d'un cours d'introduction à l'informatique au secondaire.","Este sitio web es una introducción educativa. Simplifica algunos detalles técnicos para explicar el tema con claridad a nivel introductorio de secundaria.","本网站是一个教育性入门介绍。为便于在高中入门课程层面清晰讲解主题，部分技术细节经过简化。"],
    "Image credits":["Crédits des images","Créditos de imágenes","图片致谢"],
    "Canvas diagram":["Schéma Canvas","Diagrama Canvas","Canvas 图示"],
    "Project scope":["Portée du projet","Alcance del proyecto","项目范围"],
    "This website is an educational introduction. Technical details have been simplified for an introductory computer science audience.":["Ce site est une introduction pédagogique. Les détails techniques ont été simplifiés pour un public débutant en informatique.","Este sitio web es una introducción educativa. Los detalles técnicos se han simplificado para un público de informática introductoria.","本网站是一个教育性入门介绍。技术细节已为计算机科学初学者作简化处理。"],
    "View research sources":["Consulter les sources de recherche","Ver fuentes de investigación","查看研究资料"],
    "Return to home":["Retour à l'accueil","Volver al inicio","返回首页"],
    "Please answer all three questions before checking your score.":["Veuillez répondre aux trois questions avant de vérifier votre score.","Responde las tres preguntas antes de comprobar tu puntuación.","请先回答全部三个问题，再查看分数。"],
    "Excellent! You scored":["Excellent ! Vous avez obtenu","¡Excelente! Obtuviste","太棒了！你的得分是"],
    "out of":["sur","de","分（满分"],
    "Review the pages and try again.":["Consultez les pages et réessayez.","Revisa las páginas e inténtalo de nuevo.","请复习网页内容后再试一次。"],
    "Try the quiz again after reviewing the website.":["Réessayez après avoir consulté le site.","Vuelve a intentarlo después de revisar el sitio web.","复习网站内容后再重新测验。"]
  };

  const attrRows = {
    "Diagram showing devices sending data to an edge computer and cloud services":["Schéma montrant des appareils envoyant des données à un ordinateur périphérique et à des services infonuagiques","Diagrama que muestra dispositivos que envían datos a un equipo de borde y servicios en la nube","设备向边缘计算机和云服务发送数据的示意图"],
    "Illustration of connected devices communicating through a local network":["Illustration d'appareils connectés communiquant par un réseau local","Ilustración de dispositivos conectados que se comunican mediante una red local","联网设备通过本地网络通信的插图"],
    "Flow diagram showing devices, an edge computer, and cloud services":["Schéma de flux montrant des appareils, un ordinateur périphérique et des services infonuagiques","Diagrama de flujo que muestra dispositivos, un equipo de borde y servicios en la nube","显示设备、边缘计算机和云服务的流程图"],
    "Play What Is Edge Computing? video":["Lire la vidéo Qu'est-ce que l'informatique en périphérie ?","Reproducir el vídeo ¿Qué es la computación en el borde?","播放“什么是边缘计算？”视频"],
    "Preview of the IBM Technology video What Is Edge Computing?":["Aperçu de la vidéo IBM Technology : Qu'est-ce que l'informatique en périphérie ?","Vista previa del vídeo de IBM Technology ¿Qué es la computación en el borde?","IBM Technology“什么是边缘计算？”视频预览"]
  };

  function currentLanguage() {
    const saved = localStorage.getItem("siteLanguage");
    return Object.prototype.hasOwnProperty.call(languages, saved) ? saved : "en";
  }

  function translate(key, lang) {
    const selected = lang || currentLanguage();
    if (selected === "en") return key;
    const row = rows[key];
    if (!row) return key;
    return row[["fr", "es", "zh-CN"].indexOf(selected)] || key;
  }

  function translateDocument(lang) {
    const selected = lang || currentLanguage();
    document.documentElement.lang = selected;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const original = node.nodeValue.trim();
      if (!original) continue;
      const translated = translate(original, selected);
      if (translated !== original) {
        const start = node.nodeValue.match(/^\s*/)[0];
        const end = node.nodeValue.match(/\s*$/)[0];
        node.nodeValue = start + translated + end;
      }
    }

    document.querySelectorAll("[alt],[title],[aria-label]").forEach((element) => {
      ["alt", "title", "aria-label"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (!value) return;
        const row = attrRows[value];
        if (row) element.setAttribute(attribute, selected === "en" ? value : row[["fr", "es", "zh-CN"].indexOf(selected)]);
      });
    });

    const title = document.querySelector("title");
    if (title) {
      if (!title.dataset.englishTitle) title.dataset.englishTitle = title.textContent;
      const titles = {
        "Edge Computing | Home": ["Informatique en périphérie | Accueil","Computación en el borde | Inicio","边缘计算 | 首页"],
        "Edge Computing | How It Works": ["Informatique en périphérie | Fonctionnement","Computación en el borde | Cómo funciona","边缘计算 | 工作原理"],
        "Edge Computing | Applications": ["Informatique en périphérie | Applications","Computación en el borde | Aplicaciones","边缘计算 | 应用"],
        "Edge Computing | Knowledge Check": ["Informatique en périphérie | Vérification","Computación en el borde | Prueba","边缘计算 | 知识测验"],
        "Edge Computing | Sources": ["Informatique en périphérie | Sources","Computación en el borde | Fuentes","边缘计算 | 资料来源"]
      };
      const row = titles[title.dataset.englishTitle || title.textContent] || titles[title.textContent];
      if (selected === "en") title.textContent = title.dataset.englishTitle || title.textContent;
      else if (row) title.textContent = row[["fr", "es", "zh-CN"].indexOf(selected)];
    }
    document.dispatchEvent(new CustomEvent("siteLanguageChanged", { detail: { language: selected } }));
  }

  function installSelector() {
    const nav = document.querySelector("header nav, nav");
    if (!nav || document.getElementById("language-select")) return;
    const wrapper = document.createElement("label");
    wrapper.className = "language-control";
    wrapper.setAttribute("for", "language-select");
    wrapper.textContent = translate("Language", currentLanguage()) + " ";
    const select = document.createElement("select");
    select.id = "language-select";
    select.setAttribute("aria-label", translate("Choose language", currentLanguage()));
    Object.entries(languages).forEach(([value, label]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      select.appendChild(option);
    });
    select.value = currentLanguage();
    select.addEventListener("change", () => {
      localStorage.setItem("siteLanguage", select.value);
      wrapper.firstChild.textContent = translate("Language", select.value) + " ";
      select.setAttribute("aria-label", translate("Choose language", select.value));
      translateDocument(select.value);
    });
    wrapper.appendChild(select);
    const themeControls = nav.querySelector(".theme-controls");
    if (themeControls) nav.insertBefore(wrapper, themeControls);
    else nav.appendChild(wrapper);
  }

  window.siteTranslate = translate;
  window.siteLanguage = currentLanguage;
  window.siteTranslatePage = translateDocument;

  function start() {
    installSelector();
    translateDocument(currentLanguage());
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();