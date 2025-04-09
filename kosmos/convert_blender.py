import bpy
import sys
import os

# Очистка сцены
bpy.ops.wm.read_factory_settings(use_empty=True)

# Загрузка .blend файла
input_file = "public/ImranVuhun.blend"
output_file = "public/rocket.gltf"

# Загрузка .blend файла
bpy.ops.wm.open_mainfile(filepath=input_file)

# Экспорт в GLTF
bpy.ops.export_scene.gltf(
    filepath=output_file,
    export_format='GLTF_EMBEDDED',
    export_texcoords=True,
    export_normals=True,
    export_draco_mesh_compression_enable=False,
    export_materials='EXPORT',
    export_lights=True
)

print(f"Успешно конвертировано: {input_file} -> {output_file}") 