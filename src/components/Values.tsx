import { Heart, HandHelping, GraduationCap, Shield } from "lucide-react";

export function Values() {
  const values = [
    {
      icon: Heart,
      title: "Familia",
      description: "We build strong communities and support one another as family",
      bgColor: '#FEF2EE',
      iconColor: '#E84E1B'
    },
    {
      icon: HandHelping,
      title: "Service",
      description: "We are committed to serving our community and making a positive impact",
      bgColor: '#E8F4F8',
      iconColor: '#5B9BD5'
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "We value learning, growth, and the pursuit of knowledge",
      bgColor: '#E8ECF2',
      iconColor: '#1B365D'
    },
    {
      icon: Shield,
      title: "Resilience",
      description: "We persevere through challenges and emerge stronger together",
      bgColor: '#FEF2EE',
      iconColor: '#E84E1B'
    }
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-20 px-4 sm:px-6 pb-16 sm:pb-24 lg:pb-28" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="values-heading" className="text-3xl sm:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 lg:mb-14 text-[var(--color-primary-blue)] px-2">Our Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 list-none" role="list">
          {values.map((value) => (
            <li key={value.title} role="listitem" className="flex">
              <article 
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-6 lg:p-7 border-2 hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-[var(--color-primary-blue)] focus-within:ring-offset-2 flex flex-col w-full h-full"
                style={{ borderColor: value.iconColor }}
              >
                <div className="p-2 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4 flex-shrink-0" style={{ backgroundColor: value.bgColor }} aria-hidden="true">
                  <value.icon className="w-6 h-6 sm:w-6 sm:h-6 lg:w-7 lg:h-7" style={{ color: value.iconColor }} aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 text-[var(--color-primary-blue)] flex-shrink-0">{value.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-[var(--color-text-tertiary)] flex-grow">
                  {value.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}