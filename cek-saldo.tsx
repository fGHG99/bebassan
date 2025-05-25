import { ArrowLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 w-full overflow-x-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white sticky top-0 z-10 shadow-sm">
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 cursor-pointer touch-manipulation" />
        <h1 className="text-base sm:text-lg md:text-xl font-medium text-gray-800">
          Cek Saldo
        </h1>
        <div className="w-5 sm:w-6"></div>
      </div>

      {/* Content Wrapper */}
      <div className="flex-1 flex justify-center">
        <div className="flex-1 flex flex-col justify-between w-full max-w-md mx-auto min-w-md px-3 sm:px-4 md:px-6">
          {/* Top Content */}
          <div className="space-y-3 sm:space-y-4 py-3 sm:py-4">
            {/* Card Selection */}
            <Card className="p-3 sm:p-4 bg-white shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Pilih Nomor Kartu Peserta (KPJ)
                  </p>
                  <p className="text-sm sm:text-base font-medium text-gray-800 truncate">
                    O5KB0018856
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 ml-2" />
              </div>
            </Card>
            {/* Balance Card */}
            <Card className="p-3 sm:p-4 bg-green-500 text-white shadow-md">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-5 sm:w-8 sm:h-6 flex items-center justify-center flex-shrink-0">
                  <img
                    src="/wallet-icon-final.png"
                    alt="Wallet"
                    className="w-6 h-5 sm:w-8 sm:h-6 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm opacity-90 mb-1">Saldo</p>
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold break-all">
                    Rp 16.230.050,02
                  </p>
                </div>
              </div>
            </Card>

            {/* Information Sections */}
            <div className="space-y-0 px-1 sm:px-2">
              {/* Status Kepesertaan */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  Status Kepesertaan
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  Aktif
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Segmen Peserta */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  Segmen Peserta
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  PU
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Perusahaan Tempat Bekerja */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  Perusahaan Tempat Bekerja
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800 break-words">
                  WIRA GLOBAL SOLUSI TBK
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Jumlah Tenaga Kerja */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  Jumlah Tenaga Kerja
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  4
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Iuran Terakhir */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  Iuran Terakhir
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  01-05-2025
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Pembayaran Iuran Terakhir */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                  Pembayaran Iuran Terakhir
                </p>
                <p className="text-sm sm:text-base font-medium text-gray-800">
                  05-05-2025
                </p>
              </div>

              <hr className="border-gray-200" />

              {/* Program yang Diikuti */}
              <div className="py-3 sm:py-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                  Program yang Diikuti
                </p>
                <div className="flex gap-2 sm:gap-3 md:gap-4 justify-start flex-wrap">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/JKM.png"
                      alt="JKM"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/JKK.png"
                      alt="JKK"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/JHT.png"
                      alt="JHT"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src="/JP.png"
                      alt="JP"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
