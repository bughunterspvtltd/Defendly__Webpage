const CodeDemo = () => {
  return (
    <section className="w-[95%] max-w-[1440px] mx-auto">
      <div className="bg-black px-8 py-16">
        <div className="max-w-4xl mx-auto fade-in">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-400">defendly_scan.json</span>
            </div>
            
            <pre className="text-sm md:text-base overflow-x-auto rounded-lg p-4 bg-[#0A2540]">
              <code className="font-mono">
                <span className="text-blue-400">&#123;</span>
                {`
  "scan_results": {
    "scan_id": "def-2023-09-15-001",
    "timestamp": "2025-06-20T08:15:30Z",
    "risk_score": 78.4,
    "findings": [
      {
        "severity": "critical",
        "category": "misconfiguration",
        "description": "S3 bucket with public write access",
        "resource": "storage/customer-data-backup",
        "remediation": "Update bucket policy to restrict access",
        "ai_context": "This misconfiguration could lead to data exfiltration"
      },
      {
        "severity": "high",
        "category": "outdated_dependency",
        "description": "Log4j vulnerability (CVE-2021-44228)",
        "resource": "api-service/lib/log4j-core-2.14.1.jar",
        "remediation": "Update to log4j version 2.17.0 or later",
        "ai_context": "Multiple active exploits seen in the wild"
      }
    ]
  }
                `}
                <span className="text-blue-400">&#125;</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemo;