// Define categories, subtitles, and PDF items.
// Each item: { title, file: "pdfs/yourfile.pdf", desc?: "optional 1–2 sentence explanation" }

window.WORKS = {
  categories: [
    {
      key: "ml",
      title: "Machine Learning",
      subtitles: [
        {
          key: "ml_only",
          title: "Machine Learning",
          items: [
            { title: "Music Classifer", file: "pdfs/song_classifier_report.pdf", desc:"Song classification according to emotions with Numpy implementations of MLP, SVM, XGBOOST." },
            { title: "Neural Networks Project", file: "pdfs/Neuralminiproject.pdf", desc:"Numpy  implementations of MLP for word guessing, Autoencoder for feature extraction, RNN/LSTM/GRU for sequential data processing." },
            { title: "Neural Networks Term Project", file: "pdfs/neuralnetworksterm.pdf", desc:"Fine tuning and research on state of art text to image generative models." },
            { title: "Project 1", file: "pdfs/data1.pdf", desc:"" },
            { title: "Project 2", file: "pdfs/data2.pdf", desc:"" },
            { title: "Project 3", file: "pdfs/data3.pdf", desc:"" },
            { title: "Project 4", file: "pdfs/data4.pdf", desc:"" },
            { title: "Project 5", file: "pdfs/data5.pdf", desc:"" },
          ]
        }
      ]
    },
    {
      key: "sp_telecom",
      title: "Signal Processing and Telecommunications",
      subtitles: [
        { key: "signals_systems",  title: "Signals and Systems", items: [{ title: "Assignment 1", file: "pdfs/signal/signal1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/signal/signal2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/signal/signal3.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/signal/signal4.pdf", desc:"" },{ title: "Assignment 5", file: "pdfs/signal/signal5.pdf", desc:"" },{ title: "Assignment 6", file: "pdfs/signal/signal6.pdf", desc:"" }] },
        { key: "dsp",               title: "Digital Signal Processing", items: [{ title: "Assignment 1", file: "pdfs/dsp/DSPHW1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/dsp/DSPHW2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/dsp/DSPHW3.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/dsp/DSPHW4.pdf", desc:"" },{ title: "Assignment 5", file: "pdfs/dsp/DSPHW5.pdf", desc:"" }] },
        { key: "digital_comms",     title: "Digital Communications", items: [{ title: "Assignment 1", file: "pdfs/telecom/telecom1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/telecom/telecom2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/telecom/telecom3.pdf", desc:"" },] }
      ]
    },
    {
      key: "fpga_emb",
      title: "FPGA and Embedded Systems",
      subtitles: [
        { key: "fpga",              title: "FPGA", items: [{ title: "Project 1", file: "pdfs/fpga/project1.pdf", desc:"" },{ title: "Project 2", file: "pdfs/fpga/project2.pdf", desc:"" },{ title: "Assignment 1", file: "pdfs/fpga/EEE102LAB2.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/fpga/EEE102LAB3.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/fpga/EEE102LAB4.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/fpga/EEE102LAB5.pdf", desc:"" },{ title: "Assignment 5", file: "pdfs/fpga/EEE102LAB6.pdf", desc:"" },] },
        { key: "embedded_mc",       title: "Embedded Systems and Microcontrollers", items: [{ title: "Project 1", file: "pdfs/microp/project1.txt", desc:"" },{ title: "Project 2", file: "pdfs/microp/project2.txt", desc:"" },{ title: "Assignment 1", file: "pdfs/microp/LAB1.asm", desc:"" },{ title: "Assignment 2", file: "pdfs/microp/LAB2.asm", desc:"" },] }
      ]
    },
    {
      key: "analog",
      title: "Analog Systems",
      subtitles: [
        { key: "analog_circuit",     title: "Analog Circuit Design", items: [{ title: "Assignment 1", file: "pdfs/analog/analog1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/analog/analog2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/analog/analog3.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/analog/analog4.pdf", desc:"" },{ title: "Assignment 5", file: "pdfs/analog/analog5.pdf", desc:"" },{ title: "Assignment 6", file: "pdfs/analog/analog6.pdf", desc:"" },{ title: "Assignment 7", file: "pdfs/analog/analog7.pdf", desc:"" },{ title: "Assignment 8", file: "pdfs/analog/analog8.pdf", desc:"" },{ title: "Assignment 9", file: "pdfs/analog/analog9.pdf", desc:"" },] },
        { key: "circuit_theory", title: "Circuit Theory", items: [{ title: "Assignment 1", file: "pdfs/circuit/circuit1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/circuit/circuit2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/circuit/circuit3.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/circuit/circuit4.pdf", desc:"" },{ title: "Assignment 5", file: "pdfs/circuit/circuit5.pdf", desc:"" },] },
        { key: "electronic_circuit", title: "Electronic Circuit Design", items: [{ title: "Project", file: "pdfs/ecd/project1.pdf", desc:"Analog multiplier using Gilbert Cell structure." },{ title: "Assignment 1", file: "pdfs/ecd/ecd1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/ecd/ecd2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/ecd/ecd3.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/ecd/ecd4.pdf", desc:"" },] },
        { key: "analog_ic",          title: "Analog IC Design", items: [{ title: "Project", file: "pdfs/cmos/project1.pdf", desc:"OPAMP IC design and layout with gain-bandwidth, PM-GM, noise, voltage swing, power consumption specifications" },{ title: "Assignment 1", file: "pdfs/cmos/CMOSHW1.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/cmos/CMOSHW2.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/cmos/CMOSHW3.pdf", desc:"" },{ title: "Assignment 4", file: "pdfs/cmos/CMOSHW4.pdf", desc:"" },] }
      ]
    },
    {
      key: "control",
      title: "Feedback and Control Systems",
      subtitles: [
        { key: "control_only", title: "Feedback and Control Systems", items: [{ title: "Assignment 1", file: "pdfs/feedback/EEE342LAB1REPORT.pdf", desc:"" },{ title: "Assignment 2", file: "pdfs/feedback/EEE342LAB2REPORT.pdf", desc:"" },{ title: "Assignment 3", file: "pdfs/feedback/EEE342LAB3REPORT.pdf", desc:"" },] }
      ]
    },
    {
      key: "senior",
      title: "Senior Projects",
      subtitles: [
        { key: "senior_only", title: "Senior Projects", items: [] }
      ]
    }
  ]
};
