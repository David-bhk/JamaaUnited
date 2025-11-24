import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  activeFilter, 
  onFilterChange, 
  searchTerm, 
  onSearchChange 
}) => {
  const filters = [
    { 
      id: 'all', 
      label: 'Tous les domaines',
      icon: 'Grid3X3'
    },
    { 
      id: 'family', 
      label: 'Renforcement familial',
      icon: 'Heart'
    },
    { 
      id: 'education', 
      label: 'Éducation',
      icon: 'BookOpen'
    },
    { 
      id: 'health', 
      label: 'Santé et bien-être',
      icon: 'Activity'
    },
    { 
      id: 'economic', 
      label: 'Développement économique',
      icon: 'TrendingUp'
    }
  ];

  return (
    <div className="bg-card rounded-lg shadow-soft p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
          <input
            type="text"
            placeholder="Rechercher un domaine..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {filters?.map((filter) => (
            <Button
              key={filter?.id}
              variant={activeFilter === filter?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFilterChange(filter?.id)}
              iconName={filter?.icon}
              iconPosition="left"
              iconSize={16}
              className="whitespace-nowrap"
            >
              {filter?.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;