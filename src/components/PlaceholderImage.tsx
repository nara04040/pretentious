interface PlaceholderImageProps {
  title: string;
  className?: string;
  showTitle?: boolean;
  initialSize?: 'sm' | 'md' | 'lg';
  gradientFrom?: string;
  gradientTo?: string;
}

const getInitialSize = (size: PlaceholderImageProps['initialSize'] = 'md') => {
  switch (size) {
    case 'sm':
      return 'h-12 w-12 text-xl';
    case 'lg':
      return 'h-20 w-20 text-3xl';
    default:
      return 'h-16 w-16 text-2xl';
  }
};

const PlaceholderImage = ({
  title,
  className = '',
  showTitle = true,
  initialSize = 'md',
  gradientFrom = 'from-gray-100',
  gradientTo = 'to-gray-200',
}: PlaceholderImageProps) => {
  const initial = title.charAt(0).toUpperCase();
  const initialSizeClass = getInitialSize(initialSize);
  
  return (
    <div 
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradientFrom} ${gradientTo} dark:from-gray-800 dark:to-gray-900 ${className}`}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className={`flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-700 ${initialSizeClass}`}>
          <span className="font-bold text-gray-600 dark:text-gray-300">
            {initial}
          </span>
        </div>
        {showTitle && (
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </span>
        )}
      </div>
    </div>
  );
};

export default PlaceholderImage; 