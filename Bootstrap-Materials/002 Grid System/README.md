# Bootstrap Grid System

Grid System adalah salah satu fitur paling powerful dari Bootstrap. Sistem ini menggunakan flexbox untuk membuat layout yang responsif dan fleksibel dengan sistem 12 kolom.

## Konsep Dasar Grid System

### 1. **Container**
Container adalah wrapper untuk grid system:
- `.container` - Fixed-width container yang responsif
- `.container-fluid` - Full-width container sepanjang viewport

### 2. **Row**
Row adalah horizontal group dari kolom:
- `.row` - Wrapper untuk kolom-kolom
- Menghilangkan default margin dari container

### 3. **Column** 
Column adalah tempat konten Anda:
- Sistem 12 kolom yang fleksibel
- Menggunakan prefix seperti `.col-`, `.col-sm-`, `.col-md-`, dll.

## Breakpoints Bootstrap

Bootstrap menggunakan breakpoints untuk responsive design:

| Breakpoint | Class infix | Dimensions |
|------------|-------------|------------|
| Extra small | None | <576px |
| Small | `sm` | ≥576px |
| Medium | `md` | ≥768px |
| Large | `lg` | ≥992px |
| Extra large | `xl` | ≥1200px |
| Extra extra large | `xxl` | ≥1400px |

## Class Grid System

### Equal Columns
```html
<div class="container">
    <div class="row">
        <div class="col">1 dari 3</div>
        <div class="col">2 dari 3</div>
        <div class="col">3 dari 3</div>
    </div>
</div>
```

### Specified Column Width
```html
<div class="container">
    <div class="row">
        <div class="col-4">4 kolom</div>
        <div class="col-8">8 kolom</div>
    </div>
</div>
```

### Responsive Columns
```html
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">Responsive column</div>
        <div class="col-12 col-md-6 col-lg-4">Responsive column</div>
        <div class="col-12 col-md-12 col-lg-4">Responsive column</div>
    </div>
</div>
```

## Auto-Layout Columns

### Equal Width
Kolom dengan lebar sama otomatis:
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col">Column 2</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

### Setting One Column Width
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col-6">Column 2 (lebar tetap)</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

### Variable Width Content
```html
<div class="container">
    <div class="row">
        <div class="col">Column 1</div>
        <div class="col-auto">Variable width content</div>
        <div class="col">Column 3</div>
    </div>
</div>
```

## Responsive Classes

### All Breakpoints
```html
<div class="col-6">Selalu 50% lebar</div>
```

### Stacked to Horizontal
```html
<div class="col-sm-8">col-sm-8</div>
<div class="col-sm-4">col-sm-4</div>
```

### Mix and Match
```html
<div class="col-12 col-md-8">col-12 col-md-8</div>
<div class="col-6 col-md-4">col-6 col-md-4</div>
```

## Alignment

### Vertical Alignment

#### Align Items (Row Level)
```html
<div class="row align-items-start">...</div>
<div class="row align-items-center">...</div>
<div class="row align-items-end">...</div>
```

#### Align Self (Column Level)
```html
<div class="col align-self-start">...</div>
<div class="col align-self-center">...</div>
<div class="col align-self-end">...</div>
```

### Horizontal Alignment
```html
<div class="row justify-content-start">...</div>
<div class="row justify-content-center">...</div>
<div class="row justify-content-end">...</div>
<div class="row justify-content-around">...</div>
<div class="row justify-content-between">...</div>
<div class="row justify-content-evenly">...</div>
```

## Column Wrapping

Jika lebih dari 12 kolom dalam satu row, kolom akan wrap ke baris baru:
```html
<div class="container">
    <div class="row">
        <div class="col-9">.col-9</div>
        <div class="col-4">.col-4 (akan wrap karena 9+4=13 > 12)</div>
        <div class="col-6">.col-6</div>
    </div>
</div>
```

## Column Breaks

Untuk memaksa kolom wrap di breakpoint tertentu:
```html
<div class="container">
    <div class="row">
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        
        <!-- Force next columns to break to new line -->
        <div class="w-100"></div>
        
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
        <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    </div>
</div>
```

## Reordering

### Order Classes
```html
<div class="container">
    <div class="row">
        <div class="col order-3">First (order-3)</div>
        <div class="col order-1">Second (order-1)</div>
        <div class="col order-2">Third (order-2)</div>
    </div>
</div>
```

### Offset Classes
```html
<div class="container">
    <div class="row">
        <div class="col-md-4">.col-md-4</div>
        <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
    </div>
</div>
```

## Nested Grids

Grid dapat di-nested di dalam kolom lain:
```html
<div class="container">
    <div class="row">
        <div class="col-sm-3">
            Level 1: .col-sm-3
        </div>
        <div class="col-sm-9">
            <div class="row">
                <div class="col-8 col-sm-6">
                    Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                    Level 2: .col-4 .col-sm-6
                </div>
            </div>
        </div>
    </div>
</div>
```

## Gutters (Spacing)

### Row Gutters
```html
<div class="row g-0">No gutters</div>
<div class="row g-1">Small gutters</div>
<div class="row g-3">Default gutters</div>
<div class="row g-5">Large gutters</div>
```

### Horizontal/Vertical Gutters
```html
<div class="row gx-5">Horizontal gutters</div>
<div class="row gy-5">Vertical gutters</div>
<div class="row gx-3 gy-4">Different horizontal and vertical gutters</div>
```

## Best Practices

1. **Selalu gunakan container** sebagai wrapper teratas
2. **Row harus langsung di dalam container** atau container-fluid
3. **Column harus langsung di dalam row**
4. **Konten diletakkan di dalam column**
5. **Gunakan responsive classes** untuk mobile-first design
6. **Test di berbagai ukuran layar** untuk memastikan responsiveness

## Common Patterns

### Sidebar Layout
```html
<div class="container-fluid">
    <div class="row">
        <div class="col-md-3 col-lg-2">
            <!-- Sidebar -->
        </div>
        <div class="col-md-9 col-lg-10">
            <!-- Main content -->
        </div>
    </div>
</div>
```

### Three Column Layout
```html
<div class="container">
    <div class="row">
        <div class="col-lg-3">
            <!-- Left sidebar -->
        </div>
        <div class="col-lg-6">
            <!-- Main content -->
        </div>
        <div class="col-lg-3">
            <!-- Right sidebar -->
        </div>
    </div>
</div>
```

### Card Grid
```html
<div class="container">
    <div class="row g-4">
        <div class="col-sm-6 col-lg-4">
            <div class="card">...</div>
        </div>
        <div class="col-sm-6 col-lg-4">
            <div class="card">...</div>
        </div>
        <div class="col-sm-6 col-lg-4">
            <div class="card">...</div>
        </div>
    </div>
</div>
```

## Tips dan Tricks

1. **Mobile-First**: Mulai dengan class tanpa breakpoint, lalu tambahkan responsive classes
2. **Debugging**: Tambahkan border temporary untuk melihat kolom: `style="border: 1px solid red;"`
3. **Performance**: Hindari nested grid yang terlalu dalam
4. **Accessibility**: Gunakan semantic HTML di dalam grid
5. **Custom Gutters**: Gunakan utility classes untuk spacing yang lebih custom

Bootstrap Grid System memberikan fondasi yang solid untuk membuat layout yang responsif dan profesional dengan mudah dan cepat.