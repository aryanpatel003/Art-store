
"use client";

import type { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

interface Filters {
  categories: string[];
  colors: string[];
  priceRange: [number, number];
}

interface CollectionControlsProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
  sortOption: string;
  setSortOption: (value: string) => void;
  allCategories: string[];
  allColors: string[];
  maxPrice: number;
  productCount: number;
}

export function CollectionControls({ filters, setFilters, sortOption, setSortOption, allCategories, allColors, maxPrice, productCount }: CollectionControlsProps) {
  
  const handleCategoryChange = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };
  
  const handleColorChange = (color: string) => {
    setFilters(prev => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color]
    }));
  };
  
  const handlePriceChange = (value: [number, number]) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };

  const clearFilters = () => {
    setFilters({ categories: [], colors: [], priceRange: [0, Math.ceil(maxPrice / 10) * 10] });
  };
  
  const formatPrice = (price: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);

  const hasActiveFilters = filters.categories.length > 0 || filters.colors.length > 0 || filters.priceRange[0] > 0 || filters.priceRange[1] < Math.ceil(maxPrice / 10) * 10;

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filters</h3>
        { hasActiveFilters &&
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm h-auto p-0">Clear all</Button>
        }
      </div>
      <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
        <AccordionItem value="category">
          <AccordionTrigger className="text-md font-medium">Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {allCategories.map(category => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`cat-${category}`} 
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                  />
                  <Label htmlFor={`cat-${category}`} className="font-normal cursor-pointer flex-1">{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price">
          <AccordionTrigger className="text-md font-medium">Price</AccordionTrigger>
          <AccordionContent>
            <div className="pt-4">
              <Slider
                min={0}
                max={Math.ceil(maxPrice / 10) * 10}
                step={10}
                value={filters.priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-3">
                <span>{formatPrice(filters.priceRange[0])}</span>
                <span>{formatPrice(filters.priceRange[1])}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="color">
          <AccordionTrigger className="text-md font-medium">Color</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-y-3 gap-x-2 pt-2">
              {allColors.map(color => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`color-${color}`} 
                    checked={filters.colors.includes(color)}
                    onCheckedChange={() => handleColorChange(color)}
                  />
                  <Label htmlFor={`color-${color}`} className="font-normal cursor-pointer flex-1">{color}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
  
  return (
    <div className="sticky top-24">
      {/* Top bar for mobile / Sort for desktop */}
      <div className="flex justify-between items-center mb-6 lg:mb-4">
        <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline"><Filter className="mr-2 h-4 w-4" /> Filters</Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
        </div>
        <p className="text-sm text-muted-foreground hidden lg:block">{productCount} products</p>
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>
    </div>
  );
}
