import { memo } from 'react'
import { Swatch } from '@components/product'
import { useProduct } from '../context'

const ProductOptions: React.FC = () => {
  const { product, selectedOptions, setSelectedOptions } = useProduct()

  return (
    <div>
      {product.options.map((opt) => (
        <div className="pb-4" key={opt.displayName}>
          <h2 className="uppercase font-medium text-sm tracking-wide">
            {opt.displayName}
          </h2>
          <div role="listbox" className="flex flex-row flex-wrap gap-3 py-4">
            {opt.values.map((v, i: number) => {
              const active = selectedOptions[opt.displayName.toLowerCase()]
              return (
                <Swatch
                  key={`${opt.id}-${i}`}
                  active={v.label.toLowerCase() === active}
                  variant={opt.displayName}
                  color={v.hexColors ? v.hexColors[0] : ''}
                  label={v.label}
                  onClick={() => {
                    setSelectedOptions((selectedOptions) => {
                      return {
                        ...selectedOptions,
                        [opt.displayName.toLowerCase()]: v.label.toLowerCase(),
                      }
                    })
                  }}
                />
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(ProductOptions)
