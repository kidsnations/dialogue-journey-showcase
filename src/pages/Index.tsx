import DialogCard from "@/components/DialogCard";
import DiagramDisplay from "@/components/DiagramDisplay";

const Index = () => {
  const dialogs = [
    "Sir, I am unable to relocate due to family responsibilities, as I am the only child looking after my elderly parents, my wife, and children.",
    "I understand the costs are rising in the Caesars project. Along with contributing to the existing project, I would sincerely request you to also consider me for any DevOps project running offshore — I assure you of timely and efficient delivery.",
    "Currently working on monolithic applications and moving towards containerization. The next steps are to automate the infrastructure with Terraform and migrate into a containerized environment using Azure Kubernetes Services and Azure Container Registry: Code → Dockerfile → Docker Image → Push to ACR → Kubernetes. I have created this website to give you confidence that I can take up DevOps responsibilities effectively."
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        {/* Sequential Dialog Display */}
        <section className="space-y-8">
          {dialogs.map((dialog, index) => (
            <DialogCard
              key={index}
              message={dialog}
              delay={index * 3000} // 3 seconds between each dialog
              className="mb-8"
            />
          ))}
        </section>

        {/* Diagram Display - appears after all dialogs (9 seconds total) */}
        <DiagramDisplay delay={9000} />

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="professional-card max-w-2xl mx-auto p-6">
            <p className="text-muted-foreground">
              Ready to contribute to your DevOps initiatives with proven expertise 
              in infrastructure automation, containerization, and cloud migration.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;