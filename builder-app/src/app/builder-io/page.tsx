"use client";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";

builder.init("YOUR_API_KEY"); // Тот же ключ, что и в builder-registry.ts

export default function BuilderPage() {
  const isPreviewing = useIsPreviewing();
  
  return (
    <div>
      <BuilderComponent model="page" />
    </div>
  );
}